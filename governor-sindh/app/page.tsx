// pages/index.js
import Head from 'next/head'
import Header from './components/Header'
import Link from 'next/link'



export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
      
        <title>Governor Initiative - Cloud AI Program</title>
        <meta name="description" content="Certified Cloud Applied Generative AI Engineer (GenEng)" />
      </Head>

      <header className="bg-blue-800 shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg font-bold text-blue-200">Tution Free Education Program on Latest Technology</div>
          <button className="px-4 py-2 text-white rounded ">Apply Now</button>
          <button className='px-4 py-2 text-white rounded'>Jobs</button>
          <button className='px-4 py-2 text-white rounded'>Result</button>
          <button className='px-4 py-2 text-white rounded'>Course</button>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <section className="bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="text-green-600 font-bold text-xl"></div>
          <h1 className="text-3xl font-bold text-blue-600 mt-4">Governor Sindh</h1>
          <h2 className="text-lg text-gray-700 mt-2">Kamran Khan Tessori</h2>
          <p className="text-xl text-blue-600 font-bold mt-4">Certified Cloud Applied Generative AI Engineer (GenEng)</p>
          <p className="text-lg text-gray-700 mt-2">Earn up to <span className="font-bold">$5,000/month</span></p>
          <p className="text-lg text-blue-600 font-bold mt-4">Now admissions are open in Hyderabad</p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded">Apply Now</button>
        </section>

        <section className="mt-8 text-center">
          <p className="text-lg font-semibold text-gray-600">562,143 Accepted Applications</p>
        </section>
      </main>

      <footer className="bg-gray-200 p-4 text-center">
        <p className="text-gray-600">&copy; 2024 Governor Initiative. All Rights Reserved.</p>
      </footer>
    </div>
  )
}