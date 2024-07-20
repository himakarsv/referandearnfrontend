import React from 'react'
import '../App.css'
import ReferButton from "./ReferButton"
export default function FourComps() {
  return (
    <>
    <nav className="space-x-4 hold3">
          <a href="#refer" className="text-gray-600 hover:text-blue-500"><ReferButton></ReferButton></a>
          <a href="#benefits" className="text-gray-600 hover:text-blue-500">Benefits</a>
          <a href="#faqs" className="text-gray-600 hover:text-blue-500">FAQs</a>
          <a href="#support" className="text-gray-600 hover:text-blue-500">Support</a>
          <a href="#contact" className="text-blue-500">Contact Expert</a>
        </nav>
    </>
  )
}
