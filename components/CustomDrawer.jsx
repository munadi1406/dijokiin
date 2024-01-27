import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import Image from "next/image";


const CustomDrawer = ({ isOpen, setIsOpen, data }) => {
  const {price,title,img} = data 
  
  const handleOrder = ()=>{
    const nomorWhatsApp = '082148161129';
    const message = `Halo, saya tertarik dengan produk /n"${title}" /nprice ${price}.`
    const urlWhatsApp = `https://wa.me/${nomorWhatsApp}`;
    window.open(urlWhatsApp,'_blank')
  }
  
  return (
    <Drawer
      shouldScaleBackground={false}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-blue-600">{`IDR ${Number(price).toLocaleString('id-ID')}`}</DrawerTitle>
            <DrawerDescription>{title}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0"> 
            <Image
              src={img}
              alt={title}
              placeholder="blur"
              className="rounded-md w-full h-auto"
              width={500}
              height={300}
              blurDataURL={`data:image/jpeg;base64,${img}`}
            />
          </div>
          <DrawerFooter>
            <Button className="bg-blue-600" onClick={handleOrder}>Beli</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose> 
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
