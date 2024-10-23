import Link from "next/link"

function Footer() {
  return (
   <div className="bg-blue-500 ">
    <ul>
        <Link href="/">
        <li>Home</li>
        </Link>

        <Link href="/Apply">
        <li>Apply</li>
        </Link>

        <Link href="/jobs">
        <li>jobs</li>
        </Link>

        <Link href="/Result">
        <li>Result</li>
        </Link>
        
        <Link href="/course">
        <li>course</li>
      </Link>
    </ul>
   </div>   
  )
}

export default Footer
