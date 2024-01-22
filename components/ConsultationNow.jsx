
import Link from 'next/link'
import { Button } from './ui/button'

export default function ConsultationNow() {
  return (
    <Button className="bg-blue-600">
      <Link href={"https://wa.me/6282148161129"} target='_blank'>
        Konsultasi Sekarang
      </Link>
    </Button>
  )
}
