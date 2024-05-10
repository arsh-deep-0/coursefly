export type CourseType = {
  _id: string;
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: string;
  thumbnail: string;
  duration: number;
  schedule: string;
  location: string;
  prerequisites: string[];
  syllabus: string[];
  students: any[];
  price:number;
  discountedPrice: number;
  likes:number;
};
