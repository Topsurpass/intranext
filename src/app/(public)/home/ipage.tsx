// 'use client';
// import { useState } from 'react';
// import {
// 	FaArrowRight,
// 	FaHandshake,
// 	FaUniversity,
// 	FaChartLine,
// 	FaStar,
// 	FaRegBuilding,
// } from 'react-icons/fa';
// import { FiVideo, FiCheckCircle, FiUsers, FiMail } from 'react-icons/fi';
// import { Quote, Globe, Menu, X, BookOpen, Shield } from 'lucide-react';
// import {
// 	MdOutlineOndemandVideo,
// 	MdSchool,
// 	MdCorporateFare,
// 	MdSecurity,
// } from 'react-icons/md';
// import Link from 'next/link';

// export default function LandingPage() {
// 	const [isMenuOpen, setIsMenuOpen] = useState(false);

// 	return (
// 		<div className="min-h-screen bg-white">
// 			<nav className="fixed w-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg z-50">
// 				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 					<div className="flex items-center justify-between h-16">
// 						<div className="flex-shrink-0 text-white font-bold text-2xl flex items-center gap-2">
// 							<Shield className="h-8 w-8" />
// 							EduConnect Pro
// 						</div>

// 						<div className="hidden md:block">
// 							<nav className="ml-10 flex items-baseline space-x-4">
// 								<Link
// 									href="#"
// 									className="text-gray-100 hover:text-white px-3 py-2 rounded-md flex items-center gap-1"
// 								>
// 									<MdSchool className="h-5 w-5" />
// 									For Universities
// 								</Link>
// 								<Link
// 									href="#"
// 									className="text-gray-100 hover:text-white px-3 py-2 rounded-md flex items-center gap-1"
// 								>
// 									<MdCorporateFare className="h-5 w-5" />
// 									For Enterprises
// 								</Link>
// 								<Link
// 									href="#"
// 									className="text-gray-100 hover:text-white px-3 py-2 rounded-md flex items-center gap-1"
// 								>
// 									<FiUsers className="h-5 w-5" />
// 									Partners
// 								</Link>
// 							</nav>
// 						</div>

// 						<button
// 							onClick={() => setIsMenuOpen(!isMenuOpen)}
// 							className="md:hidden p-2 text-gray-100 hover:text-white"
// 						>
// 							{isMenuOpen ? (
// 								<X className="h-6 w-6" />
// 							) : (
// 								<Menu className="h-6 w-6" />
// 							)}
// 						</button>
// 					</div>
// 				</div>

// 				{/* Mobile Menu */}
// 				{isMenuOpen && (
// 					<div className="md:hidden bg-blue-700">
// 						<div className="px-2 pt-2 pb-3 space-y-1">
// 							<Link
// 								href="#"
// 								className="text-gray-100 px-3 py-2 rounded-md flex items-center gap-2"
// 							>
// 								<MdSchool className="h-5 w-5" />
// 								For Universities
// 							</Link>
// 							<Link
// 								href="#"
// 								className="text-gray-100 px-3 py-2 rounded-md flex items-center gap-2"
// 							>
// 								<MdCorporateFare className="h-5 w-5" />
// 								For Enterprises
// 							</Link>
// 							<Link
// 								href="#"
// 								className="text-gray-100 px-3 py-2 rounded-md flex items-center gap-2"
// 							>
// 								<FiUsers className="h-5 w-5" />
// 								Partners
// 							</Link>
// 						</div>
// 					</div>
// 				)}
// 			</nav>

// 			{/* Hero Section */}
// 			<section className="relative pt-32 pb-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
// 				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 					<div className="text-center flex flex-col items-center">
// 						<FaHandshake className="h-16 w-16 text-yellow-400 mb-6" />
// 						<h1 className="text-4xl font-bold sm:text-5xl md:text-6xl max-w-3xl leading-tight">
// 							Empower Your Educational Institution with Digital
// 							Learning
// 						</h1>
// 						<p className="mt-6 text-lg md:text-xl max-w-2xl text-blue-100">
// 							Enterprise-grade learning management solutions for
// 							universities, corporations, and training
// 							organizations
// 						</p>
// 						<div className="mt-8 flex flex-col sm:flex-row gap-4">
// 							<Button>
// 								Schedule Demo <FaArrowRight className="ml-2" />
// 							</Button>
// 							<Button variant="outline">
// 								<FiVideo className="mr-2" />
// 								Watch Overview
// 							</Button>
// 						</div>

// 						{/* Achievement Badges */}
// 						<div className="mt-12 flex flex-wrap justify-center gap-6">
// 							{[
// 								{
// 									icon: Shield,
// 									text: 'GDPR & FERPA Compliant',
// 								},
// 								{
// 									icon: Globe,
// 									text: 'Trusted by 850+ Institutions',
// 								},
// 								{
// 									icon: FiCheckCircle,
// 									text: 'ISO 27001 Certified',
// 								},
// 							].map((item, idx) => (
// 								<div
// 									key={idx}
// 									className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"
// 								>
// 									<item.icon className="h-5 w-5 text-yellow-400" />
// 									<span className="text-sm">{item.text}</span>
// 								</div>
// 							))}
// 						</div>
// 					</div>
// 				</div>
// 			</section>

// 			{/* Institutional Features */}
// 			<section className="py-20 bg-gray-50">
// 				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 					<div className="text-center mb-16">
// 						<h2 className="text-3xl font-bold text-gray-900 mb-4">
// 							Institutional Solutions
// 						</h2>
// 						<p className="text-gray-600 max-w-xl mx-auto">
// 							Comprehensive tools for modern educational
// 							organizations
// 						</p>
// 					</div>

// 					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// 						{[
// 							{
// 								icon: BookOpen,
// 								title: 'Custom Learning Paths',
// 								description:
// 									'Create tailored curricula for different student groups',
// 							},
// 							{
// 								icon: FaRegBuilding,
// 								title: 'White-Label Platform',
// 								description:
// 									"Full branding control with your institution's identity",
// 							},
// 							{
// 								icon: FaChartLine,
// 								title: 'Advanced Analytics',
// 								description:
// 									'Detailed reporting on student and program performance',
// 							},
// 							{
// 								icon: FiUsers,
// 								title: 'Multi-Tenant Architecture',
// 								description:
// 									'Manage multiple departments or branches securely',
// 							},
// 							{
// 								icon: MdSecurity,
// 								title: 'Enterprise Security',
// 								description:
// 									'Role-based access control and data encryption',
// 							},
// 							{
// 								icon: MdOutlineOndemandVideo,
// 								title: 'SCORM Compliance',
// 								description:
// 									'Integrate existing training materials seamlessly',
// 							},
// 						].map((feature, idx) => (
// 							<div
// 								key={idx}
// 								className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
// 							>
// 								<feature.icon className="h-12 w-12 text-blue-600 mb-6" />
// 								<h3 className="text-xl font-semibold mb-3">
// 									{feature.title}
// 								</h3>
// 								<p className="text-gray-600">
// 									{feature.description}
// 								</p>
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 			</section>

// 			{/* Organizational Use Cases */}
// 			<section className="py-20 bg-white">
// 				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 					<div className="text-center mb-16">
// 						<h2 className="text-3xl font-bold text-gray-900 mb-4">
// 							Trusted By Leading Organizations
// 						</h2>
// 					</div>

// 					<div className="grid md:grid-cols-3 gap-8">
// 						{[
// 							{
// 								icon: MdSchool,
// 								title: 'Universities',
// 								description:
// 									'Digital transformation for higher education',
// 								features: [
// 									'Degree Program Management',
// 									'Research Collaboration',
// 									'Alumni Engagement',
// 								],
// 							},
// 							{
// 								icon: MdCorporateFare,
// 								title: 'Corporate Training',
// 								description: 'Employee upskilling at scale',
// 								features: [
// 									'Certification Tracking',
// 									'Compliance Training',
// 									'Skills Gap Analysis',
// 								],
// 							},
// 							{
// 								icon: FaUniversity,
// 								title: 'Government Programs',
// 								description: 'Mass education initiatives',
// 								features: [
// 									'Multi-language Support',
// 									'Offline Access',
// 									'Progress Monitoring',
// 								],
// 							},
// 						].map((usecase, idx) => (
// 							<div
// 								key={idx}
// 								className="bg-gray-50 p-8 rounded-xl"
// 							>
// 								<usecase.icon className="h-12 w-12 text-blue-600 mb-6" />
// 								<h3 className="text-xl font-semibold mb-3">
// 									{usecase.title}
// 								</h3>
// 								<p className="text-gray-600 mb-4">
// 									{usecase.description}
// 								</p>
// 								<ul className="space-y-2">
// 									{usecase.features.map((feature, fIdx) => (
// 										<li
// 											key={fIdx}
// 											className="flex items-center gap-2 text-gray-600"
// 										>
// 											<FiCheckCircle className="h-5 w-5 text-green-500" />
// 											{feature}
// 										</li>
// 									))}
// 								</ul>
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 			</section>

// 			{/* Enterprise Integration */}
// 			<section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
// 				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 					<div className="text-center mb-16">
// 						<h2 className="text-3xl font-bold mb-4">
// 							Seamless Ecosystem Integration
// 						</h2>
// 						<p className="text-blue-100 max-w-xl mx-auto">
// 							Connect with your existing technology stack
// 						</p>
// 					</div>

// 					<div className="grid md:grid-cols-4 gap-8 text-center">
// 						<IntegrationItem title="LMS Integration" icon="📚" />
// 						<IntegrationItem title="SSO & SAML" icon="🔑" />
// 						<IntegrationItem title="API Access" icon="⚙️" />
// 						<IntegrationItem title="Data Export" icon="📊" />
// 					</div>
// 				</div>
// 			</section>

// 			{/* Institutional Testimonials */}
// 			<section className="py-20 bg-gray-50">
// 				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 					<div className="text-center mb-16">
// 						<h2 className="text-3xl font-bold text-gray-900 mb-4">
// 							Trusted by Education Leaders
// 						</h2>
// 					</div>

// 					<div className="grid md:grid-cols-2 gap-8">
// 						{[
// 							{
// 								name: 'Dr. Sarah Johnson',
// 								role: 'CIO, State University System',
// 								text: 'EduConnect Pro revolutionized our distance learning programs with its robust scalability and security features.',
// 							},
// 							{
// 								name: 'Michael Chen',
// 								role: 'Head of L&D, TechGlobal Inc.',
// 								text: "The platform's analytics capabilities have transformed how we measure and improve employee training outcomes.",
// 							},
// 						].map((testimonial, idx) => (
// 							<div
// 								key={idx}
// 								className="bg-white p-8 rounded-xl shadow-lg"
// 							>
// 								<Quote className="h-8 w-8 text-blue-600 mb-4 rotate-180" />
// 								<p className="text-gray-600 mb-6">
// 									"{testimonial.text}"
// 								</p>
// 								<div className="flex items-center gap-4">
// 									<div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
// 										<span className="text-blue-600 font-medium">
// 											{testimonial.name
// 												.split(' ')
// 												.map((n) => n[0])
// 												.join('')}
// 										</span>
// 									</div>
// 									<div>
// 										<h4 className="font-semibold">
// 											{testimonial.name}
// 										</h4>
// 										<p className="text-gray-600 text-sm">
// 											{testimonial.role}
// 										</p>
// 										<div className="flex items-center gap-1 mt-1 text-yellow-400">
// 											{[...Array(5)].map((_, i) => (
// 												<FaStar
// 													key={i}
// 													className="h-4 w-4"
// 												/>
// 											))}
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 			</section>

// 			{/* Enterprise Contact Form */}
// 			<section className="py-20 bg-white">
// 				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 					<div className="text-center mb-16">
// 						<h2 className="text-3xl font-bold text-gray-900 mb-4">
// 							Start Your Digital Transformation
// 						</h2>
// 						<p className="text-gray-600 max-w-xl mx-auto">
// 							Schedule a personalized demo for your organization
// 						</p>
// 					</div>

// 					<div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl">
// 						<form className="space-y-6">
// 							<div className="grid md:grid-cols-2 gap-6">
// 								<div>
// 									<label className="block text-gray-700 mb-2">
// 										Organization Name
// 									</label>
// 									<input
// 										type="text"
// 										className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
// 									/>
// 								</div>
// 								<div>
// 									<label className="block text-gray-700 mb-2">
// 										Your Role
// 									</label>
// 									<select className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500">
// 										<option>
// 											University Administrator
// 										</option>
// 										<option>Corporate Trainer</option>
// 										<option>Government Official</option>
// 										<option>Other</option>
// 									</select>
// 								</div>
// 							</div>
// 							<div>
// 								<label className="block text-gray-700 mb-2">
// 									Email Address
// 								</label>
// 								<input
// 									type="email"
// 									className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
// 								/>
// 							</div>
// 							<div>
// 								<label className="block text-gray-700 mb-2">
// 									Message
// 								</label>
// 								<textarea
// 									rows="4"
// 									className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
// 								></textarea>
// 							</div>
// 							<Button className="w-full">
// 								<FiMail className="mr-2" />
// 								Request Demo
// 							</Button>
// 						</form>
// 					</div>
// 				</div>
// 			</section>

// 			{/* Footer */}
// 			<Footer />
// 		</div>
// 	);
// }

// // Button Component
// const Button = ({ children, variant = 'primary', className, ...props }) => (
// 	<button
// 		className={`flex items-center justify-center px-8 py-3 rounded-lg font-medium transition-all ${
// 			variant === 'primary'
// 				? 'bg-yellow-400 text-blue-900 hover:bg-yellow-500'
// 				: 'bg-transparent border-2 border-white text-white hover:bg-white/10'
// 		} ${className}`}
// 		{...props}
// 	>
// 		{children}
// 	</button>
// );

// // Integration Component
// const IntegrationItem = ({ title, icon }) => (
// 	<div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
// 		<div className="text-4xl mb-4">{icon}</div>
// 		<h3 className="text-xl font-semibold">{title}</h3>
// 	</div>
// );

// // Footer Component
// const Footer = () => (
// 	<footer className="bg-gray-900 text-white">
// 		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
// 			<div className="grid md:grid-cols-4 gap-8">
// 				<div>
// 					<h4 className="text-lg font-semibold mb-4">
// 						EduConnect Pro
// 					</h4>
// 					<p className="text-gray-400">
// 						Enterprise learning solutions for educational
// 						organizations
// 					</p>
// 				</div>
// 				<div>
// 					<h4 className="text-lg font-semibold mb-4">Solutions</h4>
// 					<ul className="space-y-2">
// 						<li>
// 							<Link
// 								href="#"
// 								className="text-gray-400 hover:text-white"
// 							>
// 								For Universities
// 							</Link>
// 						</li>
// 						<li>
// 							<Link
// 								href="#"
// 								className="text-gray-400 hover:text-white"
// 							>
// 								Corporate Training
// 							</Link>
// 						</li>
// 						<li>
// 							<Link
// 								href="#"
// 								className="text-gray-400 hover:text-white"
// 							>
// 								Government Programs
// 							</Link>
// 						</li>
// 					</ul>
// 				</div>
// 				<div>
// 					<h4 className="text-lg font-semibold mb-4">Resources</h4>
// 					<ul className="space-y-2">
// 						<li>
// 							<Link
// 								href="#"
// 								className="text-gray-400 hover:text-white"
// 							>
// 								API Documentation
// 							</Link>
// 						</li>
// 						<li>
// 							<Link
// 								href="#"
// 								className="text-gray-400 hover:text-white"
// 							>
// 								Compliance Center
// 							</Link>
// 						</li>
// 						<li>
// 							<Link
// 								href="#"
// 								className="text-gray-400 hover:text-white"
// 							>
// 								Security Overview
// 							</Link>
// 						</li>
// 					</ul>
// 				</div>
// 				<div>
// 					<h4 className="text-lg font-semibold mb-4">Contact</h4>
// 					<p className="text-gray-400">
// 						Enterprise Support:
// 						<br />
// 						<Link
// 							href="mailto:support@educonnectpro.com"
// 							className="hover:text-white"
// 						>
// 							support@educonnectpro.com
// 						</Link>
// 					</p>
// 				</div>
// 			</div>
// 			<div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
// 				© {new Date().getFullYear()} EduConnect Pro. All rights
// 				reserved.
// 			</div>
// 		</div>
// 	</footer>
// );
