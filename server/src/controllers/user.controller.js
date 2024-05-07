import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/apiResponse.js";




const registerUser = asyncHandler(async (req, res) => {
  const { userName, fullName, email, password } = req.body;
  console.log(req.body);

  if (
    [userName, fullName, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, `All fields are required`);
  }

  const existedUser = await User.findOne({ $or: [{ userName }, { email }] });

  if (existedUser) {
    throw new ApiError(409, `User with this username or email already exists`);
  }
 

  const user = await User.create({
    fullName,
    email,
    password,
    userName,
  });

  const createdUser = await User.findOne(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  const { accessToken, refreshToken } =
    await generateAccessTokenAndRefreshToken(user._id);

  let loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  loggedInUser.accessToken = accessToken;
  console.log("logged in user", loggedInUser);

  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    partitioned: true,
  };

  return res
    .status(201)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(201, loggedInUser, "User registered successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password, userName } = req.body;
  console.log(req.body);
  if (!userName && !email) {
    throw new ApiError(400, `username or email required`);
  }

  const user = await User.findOne({
    $or: [{ userName }, { email }],
  });

  if (!user) {
    throw new ApiError(404, `User does not exist`);
  }

  const isPaswordValid = await user.isPasswordCorrect(password);

  if (!isPaswordValid) {
    throw new ApiError(401, `Password does not match`);
  }

  const { accessToken, refreshToken } =
    await generateAccessTokenAndRefreshToken(user._id);
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    partitioned: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged in successfully"
      )
    );
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const user = await User.findById(req.user?._id);

  isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

  if (!isPasswordCorrect) {
    throw new ApiError(400, "Wrong Password");
  }

  user.password = newPassword;
  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password updated successfully"));
});

const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(200, req.user, "current user fetched successfully");
});

const getUserAnalytics = asyncHandler(async (req, res) => {
  const { username } = req.params;
  if (!username?.trim()) {
    throw new ApiError(`Username is missing`);
  }

  const userAnalytics = await User.aggregate([
    {
      $match: {
        userName: username?.toLowerCase(),
      },
    },
    {
      $lookup: {
        from: "contracts",
      },
    },
  ]);
});

const getUserName = asyncHandler(async (req, res) => {
  const userID = req.params.userID;
  const user = await User.findById(userID);
  if (!user) {
    throw new ApiError(400, "Wrong UserID");
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        userName: user.userName,
      },
      "UserName fetched sucessfully"
    )
  );
});
const getFullName = asyncHandler(async (req, res) => {
  const userID = req.params.userID;
  const user = await User.findById(userID);
  if (!user) {
    throw new ApiError(400, "Wrong UserID");
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        userName: user.fullName,
      },
      "UserName fetched sucessfully"
    )
  );
});

export {
  registerUser,
  loginUser,
  getCurrentUser,
  getUserName,
  getFullName,
};
