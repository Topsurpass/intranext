// 'use client';
// import { useState } from 'react';
// import {
//     FaArrowRight,
//     FaUserGraduate,
//     FaClock,
//     FaChartLine,
//     FaStar,
// } from 'react-icons/fa';
// import { FiBook, FiVideo, FiCheckCircle } from 'react-icons/fi';
// import { Quote, GraduationCap, Globe, BadgeCheck, Menu, X } from 'lucide-react';
// import { GiTeacher } from 'react-icons/gi';
// import { MdOutlineOndemandVideo } from 'react-icons/md';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function LandingPage() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     return (
//         <div className="min-h-screen bg-white">
//             {/* Navigation with Mobile Menu */}
//             <nav className="fixed w-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg z-50">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex items-center justify-between h-16">
//                         <div className="flex-shrink-0 text-white font-bold text-2xl flex items-center gap-2">
//                             <GraduationCap className="h-8 w-8" />
//                             EduMaster
//                         </div>

//                         {/* Desktop Menu */}
//                         <div className="hidden md:block">
//                             <nav className="ml-10 flex items-baseline space-x-4">
//                                 <Link
//                                     href="#"
//                                     className="text-gray-100 hover:text-white px-3 py-2 rounded-md flex items-center gap-1"
//                                 >
//                                     <FiBook className="h-5 w-5" />
//                                     Courses
//                                 </Link>
//                                 <Link
//                                     href="#"
//                                     className="text-gray-100 hover:text-white px-3 py-2 rounded-md flex items-center gap-1"
//                                 >
//                                     <GiTeacher className="h-5 w-5" />
//                                     Instructors
//                                 </Link>
//                                 <Link
//                                     href="#"
//                                     className="text-gray-100 hover:text-white px-3 py-2 rounded-md flex items-center gap-1"
//                                 >
//                                     <Globe className="h-5 w-5" />
//                                     About
//                                 </Link>
//                                 <Link
//                                     href="/login"
//                                     className="text-gray-100 hover:text-white px-3 py-2 rounded-md flex items-center gap-1"
//                                 >
//                                     <Globe className="h-5 w-5" />
//                                     Signin
//                                 </Link>
//                             </nav>
//                         </div>

//                         {/* Mobile Menu Button */}
//                         <button
//                             onClick={() => setIsMenuOpen(!isMenuOpen)}
//                             className="md:hidden p-2 text-gray-100 hover:text-white"
//                         >
//                             {isMenuOpen ? (
//                                 <X className="h-6 w-6" />
//                             ) : (
//                                 <Menu className="h-6 w-6" />
//                             )}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Menu */}
//                 {isMenuOpen && (
//                     <div className="md:hidden bg-blue-700">
//                         <div className="px-2 pt-2 pb-3 space-y-1">
//                             <Link
//                                 href="#"
//                                 className="text-gray-100  px-3 py-2 rounded-md flex items-center gap-2"
//                             >
//                                 <FiBook className="h-5 w-5" />
//                                 Courses
//                             </Link>
//                             <Link
//                                 href="#"
//                                 className="text-gray-100  px-3 py-2 rounded-md flex items-center gap-2"
//                             >
//                                 <GiTeacher className="h-5 w-5" />
//                                 Instructors
//                             </Link>
//                             <Link
//                                 href="#"
//                                 className="text-gray-100  px-3 py-2 rounded-md flex items-center gap-2"
//                             >
//                                 <Globe className="h-5 w-5" />
//                                 About
//                             </Link>
//                         </div>
//                     </div>
//                 )}
//             </nav>

//             {/* Hero Section */}
//             <section className="relative pt-32 pb-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center flex flex-col items-center">
//                         <BadgeCheck className="h-16 w-16 text-yellow-400 mb-6" />
//                         <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl max-w-3xl leading-tight">
//                             Transform Your Future Through Learning
//                         </h1>
//                         <p className="mt-6 text-lg md:text-xl max-w-2xl text-blue-100">
//                             Master in-demand skills with project-based learning
//                             and expert mentorship
//                         </p>
//                         <div className="mt-8 flex flex-col sm:flex-row gap-4">
//                             <Button>
//                                 Explore Courses{' '}
//                                 <FaArrowRight className="ml-2" />
//                             </Button>
//                             <Button variant="outline">
//                                 <FiVideo className="mr-2" />
//                                 Watch Demo
//                             </Button>
//                         </div>

//                         {/* Achievement Badges */}
//                         <div className="mt-12 flex flex-wrap justify-center gap-6">
//                             {[
//                                 {
//                                     icon: FiCheckCircle,
//                                     text: 'Industry-Recognized Certifications',
//                                 },
//                                 {
//                                     icon: Globe,
//                                     text: '50+ Countries Supported',
//                                 },
//                                 {
//                                     icon: FaUserGraduate,
//                                     text: '1M+ Alumni Network',
//                                 },
//                             ].map((item, idx) => (
//                                 <div
//                                     key={idx}
//                                     className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"
//                                 >
//                                     <item.icon className="h-5 w-5 text-yellow-400" />
//                                     <span className="text-sm">{item.text}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Features Grid */}
//             <section className="py-20 bg-gray-50">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl font-bold text-gray-900 mb-4">
//                             Why Learn With Us?
//                         </h2>
//                         <p className="text-gray-600 max-w-xl mx-auto">
//                             Experience education designed for the modern learner
//                         </p>
//                     </div>

//                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {[
//                             {
//                                 icon: MdOutlineOndemandVideo,
//                                 title: 'On-Demand Learning',
//                                 description:
//                                     'Access courses 24/7 with lifetime access to materials',
//                             },
//                             {
//                                 icon: GiTeacher,
//                                 title: 'Expert Mentors',
//                                 description:
//                                     'Learn from industry professionals with real-world experience',
//                             },
//                             {
//                                 icon: FaChartLine,
//                                 title: 'Career Growth',
//                                 description:
//                                     'Career services and job placement support',
//                             },
//                             {
//                                 icon: FiVideo,
//                                 title: 'Interactive Labs',
//                                 description:
//                                     'Hands-on projects with real-time feedback',
//                             },
//                             {
//                                 icon: Globe,
//                                 title: 'Global Community',
//                                 description:
//                                     'Connect with peers worldwide in discussion forums',
//                             },
//                             {
//                                 icon: FaClock,
//                                 title: 'Flexible Schedule',
//                                 description:
//                                     'Learn at your own pace with mobile access',
//                             },
//                         ].map((feature, idx) => (
//                             <div
//                                 key={idx}
//                                 className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
//                             >
//                                 <feature.icon className="h-12 w-12 text-blue-600 mb-6" />
//                                 <h3 className="text-xl font-semibold mb-3">
//                                     {feature.title}
//                                 </h3>
//                                 <p className="text-gray-600">
//                                     {feature.description}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Course Showcase */}
//             <section className="py-20 bg-white">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl font-bold text-gray-900 mb-4">
//                             Popular Courses
//                         </h2>
//                         <p className="text-gray-600 max-w-xl mx-auto">
//                             Explore our most enrolled courses across various
//                             categories
//                         </p>
//                     </div>

//                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {[1, 2, 3, 4, 5, 6].map((course) => (
//                             <CourseCard key={course} />
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Stats Section */}
//             <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid md:grid-cols-3 gap-8 text-center">
//                         <StatItem
//                             icon={FaUserGraduate}
//                             number="500K+"
//                             label="Active Learners"
//                         />
//                         <StatItem
//                             icon={FaClock}
//                             number="1.2M+"
//                             label="Hours of Content"
//                         />
//                         <StatItem
//                             icon={FaChartLine}
//                             number="98%"
//                             label="Completion Rate"
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* Testimonials */}
//             <section className="py-20 bg-gray-50">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl font-bold text-gray-900 mb-4">
//                             Student Success Stories
//                         </h2>
//                         <p className="text-gray-600 max-w-xl mx-auto">
//                             Hear from our global community of learners
//                         </p>
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-8">
//                         {[1, 2].map((testimonial) => (
//                             <div
//                                 key={testimonial}
//                                 className="bg-white p-8 rounded-xl shadow-lg"
//                             >
//                                 <Quote className="h-8 w-8 text-blue-600 mb-4 rotate-180" />
//                                 <p className="text-gray-600 mb-6">
//                                     "The project-based learning approach helped
//                                     me gain practical skills that I immediately
//                                     applied in my job. The mentor support was
//                                     exceptional!"
//                                 </p>
//                                 <div className="flex items-center gap-4">
//                                     <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
//                                         <span className="text-blue-600 font-medium">
//                                             JD
//                                         </span>
//                                     </div>
//                                     <div>
//                                         <h4 className="font-semibold">
//                                             John Doe
//                                         </h4>
//                                         <p className="text-gray-600 text-sm">
//                                             Senior Developer @TechCorp
//                                         </p>
//                                         <div className="flex items-center gap-1 mt-1 text-yellow-400">
//                                             {[...Array(5)].map((_, i) => (
//                                                 <FaStar
//                                                     key={i}
//                                                     className="h-4 w-4"
//                                                 />
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Footer */}
//             <Footer />
//         </div>
//     );
// }

// // Additional Components
// const Button = ({ children, variant = 'primary', ...props }) => (
//     <button
//         className={`flex items-center justify-center px-8 py-3 rounded-lg font-medium transition-all ${
//             variant === 'primary'
//                 ? 'bg-yellow-400 text-blue-900 hover:bg-yellow-500'
//                 : 'bg-transparent border-2 border-white text-white hover:bg-white/10'
//         }`}
//         {...props}
//     >
//         {children}
//     </button>
// );

// const CourseCard = () => (
//     <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
//         <div className="relative">
//             <Image
//                 src="/course-thumbnail.jpg"
//                 alt="Course"
//                 className="w-full h-48 object-cover"
//                 width={400}
//                 height={300}
//             />
//             <div className="absolute bottom-0 left-0 bg-blue-600 text-white px-4 py-1 text-sm">
//                 Bestseller
//             </div>
//         </div>
//         <div className="p-6">
//             <div className="flex items-center justify-between mb-3">
//                 <span className="text-blue-600 font-medium flex items-center gap-1">
//                     <FiBook className="h-4 w-4" />
//                     Web Development
//                 </span>
//                 <div className="flex items-center gap-1 text-yellow-400">
//                     <FaStar className="h-4 w-4" />
//                     <span>4.9</span>
//                 </div>
//             </div>
//             <h3 className="text-xl font-semibold mb-2">
//                 Modern Full-Stack Development
//             </h3>
//             <p className="text-gray-600 mb-4">
//                 Master Next.js, TypeScript, GraphQL, and AWS
//             </p>
//             <div className="flex items-center justify-between text-sm text-gray-500">
//                 <span className="flex items-center gap-1">
//                     <MdOutlineOndemandVideo className="h-4 w-4" />
//                     45 Lessons
//                 </span>
//                 <span className="flex items-center gap-1">
//                     <FaClock className="h-4 w-4" />
//                     30 Hours
//                 </span>
//             </div>
//             <button className="w-full mt-4 bg-blue-100 text-blue-600 py-2 rounded-lg hover:bg-blue-200 flex items-center justify-center gap-2">
//                 Enroll Now <FaArrowRight className="h-4 w-4" />
//             </button>
//         </div>
//     </div>
// );

// const StatItem = ({ icon: Icon, number, label }) => (
//     <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
//         <Icon className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
//         <div className="text-4xl font-bold mb-2">{number}</div>
//         <div className="text-gray-200">{label}</div>
//     </div>
// );

// const Footer = () => (
//     <footer className="bg-gray-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//             <div className="grid md:grid-cols-4 gap-8">
//                 {/* Footer Sections */}
//             </div>
//             <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
//                 © {new Date().getFullYear()} EduMaster. All rights reserved.
//             </div>
//         </div>
//     </footer>
// );
