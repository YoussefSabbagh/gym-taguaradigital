import SponsorRedBull from "../../assets/image/logos/SponsorRedBull.png";
import SponsorForbes from "../../assets/image/logos/SponsorForbes.png";
import SponsorFortune from "../../assets/image/logos/SponsorFortune.png";
import SponsorOctane from "../../assets/image/logos/SponsorOctane.png";
// import SponsorTaguara from "../../assets/image/logos/td-trans.png";

const Sponsors = () => {
  return (
    <section className="hidden h-[150px] w-full bg-primary-100 py-10 md:block">
      <div className="mx-auto w-5/6">
        <div className="flex w-full items-center justify-between gap-8">
          <img alt="redbull-sponsor" src={SponsorRedBull} />
          <img alt="forbes-sponsor" src={SponsorForbes} />
          <img alt="fortune-sponsor" src={SponsorFortune} />
          <img alt="Octane-sponsor" src={SponsorOctane} />
          {/* <img
            alt="Taguara Digital sponsor"
            src={SponsorTaguara}
            className="w-24"
          /> */}
        </div>
      </div>
    </section>
  );
};
export default Sponsors;
