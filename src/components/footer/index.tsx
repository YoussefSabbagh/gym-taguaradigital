import Logo from "../../assets/image/logos/td-trans.png";

const Footer = () => {
  return (
    <footer className="mx-auto bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/5 md:mt-0">
          <div className="w-[80px]">
            <img alt="logo" src={Logo} className="w-full" />
          </div>
        </div>
        <div className="mt-16 basis-2/5 md:mt-0">
          <h3 className="text-xl font-bold">Links</h3>
          <p className="my-2">Massa orci senectus</p>
          <p className="my-2">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-2/5 md:mt-0">
          <h3 className="text-xl font-bold">Contact Us</h3>
          <p className="my-2">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
      <p className="text-center text-xs">
        2023 © Taguara Digital All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
