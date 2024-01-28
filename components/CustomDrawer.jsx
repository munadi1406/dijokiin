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
import Image from "./Image";


const CustomDrawer = ({ isOpen, setIsOpen, data }) => {
  const {price,title,img,tech} = data 
  
  const handleOrder = ()=>{
    const nomorWhatsApp = '082148161129';
    const message = `Halo, saya tertarik dengan produk /n"${title}" /nprice ${price}.`
    const urlWhatsApp = `https://wa.me/${nomorWhatsApp}text=${message}`;
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
            <div className="w-full flex flex-wrap gap-2">
            {tech && tech.split(",").map((techData) => (
              <h4 className="bg-blue-600/20 text-[10px] font-semibold text-blue-600 px-2 py-1 rounded-full" key={techData}>
                  {techData}
                </h4>
              ))}
                  </div>
          </DrawerHeader>
          <div className="p-4 pb-0"> 
            <Image
              id={img}
              alt={title}
              className="rounded-md w-full h-auto"
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
