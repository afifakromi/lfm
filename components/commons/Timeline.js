import React from "react";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  return (
    <div className="bg-nav w-full py-10 flex flex-col items-center justify-center">
      <p className="text-6xl text-customCrem font-montserrat text-center mb-16">
        Ganffest 2022 <br /> Main Event Timeline
      </p>

      <TimelineItem
        date="14 Februari"
        className="right-20"
        bgColor="#2641A1"
        isTop={false}
        rounded="rounded-t-2xl"
        content="
        <pre>
        19.00 - 19.10   Open gate <br/>
        19.10 - 20.00   Opening ganffest 2022<br/>
        20.00 - 20.40   Pemutaran <br/> </pre>"
      />
      <TimelineItem
        date="15 Februari"
        className="left-20"
        bgColor="#48449A"
        content="
        <pre>
        16.00 - 17.30   Program Anatomy of Feelings <br/>
        &nbsp               Program Disfigured Hearts <br/>
        &nbsp               Program GFF x Mini Film Festival <br/>
        19.00 - 20.30   Program From Another Sight <br/>
        20.30 - 21.00   Diskusi Program From Another Sight <br/> </pre>"
      />
      <TimelineItem
        date="16 Februari"
        className="right-20"
        bgColor="#6A4995"
        content="
        <pre>
        16.00 - 17.30   <a href='https://bit.ly/DisfiguredHeartDay3' style='color:black; font-family:verdana;'>Program Disfigured Hearts </a><br/>
        &nbsp               <a href='https://bit.ly/KolaborasiGFFxMFFDay3' style='color:black; font-family:verdana;'>Program GFF x Mini Film Festival </a><br/>
        &nbsp               <a href='https://bit.ly/FromAnotherSightDay3' style='color:black; font-family:verdana;'>Program From Another Sight </a><br/>
        19.00 - 20.30   <a href='https://bit.ly/AnatomyOfFeelingsDay3' style='color:black; font-family:verdana;'>Program Anatomy of Feelings </a><br/>
        20.30 - 21.00   <a href='https://bit.ly/DiskusiPemutaranGFF2022' style='color:black; font-family:verdana;'>Diskusi Program Anatomy of Feelings </a><br/><br/></pre>"
      />
      <TimelineItem
        date="17 Februari"
        className="left-20"
        bgColor="#8E4F90"
        content="
        <pre>
        16.00 - 17.30   <a href='https://bit.ly/KolaborasiGFFxMFFDay4' style='color:black; font-family:verdana;'>Program GFF x Mini Film Festival </a><br/>
        &nbsp               <a href='https://bit.ly/bit.ly/FromAnotherSightDay4' style='color:black; font-family:verdana;'>Program From Another Sight </a><br/>
        &nbsp               <a href='https://bit.ly/AnatomyOfFeelingsDay4' style='color:black; font-family:verdana;'>Program Anatomy of Feelings </a><br/>
        19.00 - 20.30   <a href='https://bit.ly/DisfiguredHeartDay4' style='color:black; font-family:verdana;'>Program Disfigured Hearts </a><br/>
        20.30 - 21.00   <a href='https://bit.ly/DisfiguredHeartDay4' style='color:black; font-family:verdana;'>Diskusi Program Disfigured Hearts </a><br/><br/></pre>"
      />
      <TimelineItem
        date="18 Februari"
        className="right-20"
        bgColor="#B3548A"
        content="
        <pre>
        16.00 - 17.30   <a href='https://bit.ly/FromAnotherSightDay5' style='color:black; font-family:verdana;'>Program From Another Sight </a><br/>
        &nbsp               <a href='https://bit.ly/AnatomyOfFeelingsDay5' style='color:black; font-family:verdana;'>Program Anatomy of Feelings </a><br/>
        &nbsp               <a href='https://bit.ly/DisfiguredHeartDay5' style='color:black; font-family:verdana;'>Program Disfigured Hearts </a><br/>
        &nbsp               <a href='https://bit.ly/KolaborasiGFFxMFFDay5' style='color:black; font-family:verdana;'>Program GFF x Mini Film Festival </a><br/><br/></pre>"
      />
      <TimelineItem
        date="19 Februari"
        className="left-20"
        bgColor="#E15A82"
        content="
        <pre>
        13.25 - 14.30   <a href='https://bit.ly/BandungNuAing' style='color:black; font-family:verdana;'>Program Bandung Nu Aing </a><br/>
        14.35 - 15.05   <a href='https://bit.ly/DiskusiPemutaranGFF2022' style='color:black; font-family:verdana;'>Diskusi Program Bandung Nu Aing </a><br/>
        15.20 - 16.50   <a href='https://bit.ly/KompetisiGFF' style='color:black; font-family:verdana;'>Program Kompetisi </a><br/>
        16.55 - 17.25   <a href='https://bit.ly/DiskusiPemutaranGFF2022' style='color:black; font-family:verdana;'>Diskusi Program Kompetisi </a><br/><br/></pre>"
      />
      <TimelineItem
        date="20 Februari"
        className="right-20"
        bgColor="#FE6C79"
        isBottom={true}
        rounded="rounded-b-2xl"
        content="
        <pre>
        15.55 - 17.40   <a href='https://bit.ly/HorizonGFF' style='color:black; font-family:verdana;'>Program Horizon </a><br/>
        17.45 - 18.15   <a href='https://bit.ly/DiskusiPemutaranGFF2022' style='color:black; font-family:verdana;'>Diskusi Program Horizon </a><br/>
        18.45 - 19.00   <a href='https://bit.ly/ClosingGFF2022' style='color:black; font-family:verdana;'>Awarding Night </a><br/><br/></pre>"
      />
    </div>
  );
};

export default Timeline;
