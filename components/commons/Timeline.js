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
        16.00 - 17.30   Program Disfigured Hearts <br/>
        &nbsp               Program GFF x Mini Film Festival <br/>
        &nbsp               Program From Another Sight <br/>
        19.00 - 20.30   Program Anatomy of Feelings <br/>
        20.30 - 21.00   Diskusi Program Anatomy of Feelings <br/> </pre>"
      />
      <TimelineItem
        date="17 Februari"
        className="left-20"
        bgColor="#8E4F90"
        content="
        <pre>
        16.00 - 17.30   Program GFF x Mini Film Festival <br/>
        &nbsp               Program From Another Sight <br/>
        &nbsp               Program Anatomy of Feelings <br/>
        19.00 - 20.30   Program Disfigured Hearts <br/>
        20.30 - 21.00   Diskusi Program Disfigured Hearts <br/> </pre>"
      />
      <TimelineItem
        date="18 Februari"
        className="right-20"
        bgColor="#B3548A"
        content="
        <pre>
        16.00 - 17.30   Program From Another Sight <br/>
        &nbsp               Program Anatomy of Feelings <br/>
        &nbsp               Program Disfigured Hearts <br/>
        &nbsp               Program GFF x Mini Film Festival <br/> </pre>"
      />
      <TimelineItem
        date="19 Februari"
        className="left-20"
        bgColor="#E15A82"
        content="
        <pre>
        13.25 - 14.30   Program Bandung Nu Aing <br/>
        14.35 - 15.05   Diskusi Program Bandung Nu Aing <br/>
        15.20 - 16.50   Program Kompetisi <br/>
        16.55 - 17.25   Diskusi Program Kompetisi <br/> </pre>"
      />
      <TimelineItem
        date="20 Februari"
        className="right-20"
        bgColor="#FE6C79"
        isBottom={true}
        rounded="rounded-b-2xl"
        content="
        <pre>
        15.55 - 17.40   Program Horizon <br/>
        17.45 - 18.15   Diskusi Program Horizon <br/>
        18.45 - 19.00   Awarding Night <br/> </pre>"
      />
    </div>
  );
};

export default Timeline;
