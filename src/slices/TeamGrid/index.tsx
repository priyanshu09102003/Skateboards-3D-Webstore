import React, { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { createClient } from "@/prismicio";
import { JSX } from "react/jsx-runtime";
import { Skater } from "@/components/Skater";

/**
 * Props for `TeamGrid`.
 */
export type TeamGridProps = SliceComponentProps<Content.TeamGridSlice>;

/**
 * Component for "TeamGrid" Slices.
 */
const TeamGrid = async({ slice } : TeamGridProps): Promise<JSX.Element> => {
  const client = createClient();
  const skaters = await client.getAllByType("skater")

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-brand-purple"
    >

      <Heading className="text-center mb-8 text-white" as="h2">
        <PrismicRichText field={slice.primary.heading} />
      </Heading>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">

        {
          skaters.map((skater , index) => (
            <React.Fragment key={index}>

              {
                skater.data.first_name && <Skater index={index} skater={skater} />
              }

            </React.Fragment>
          ))
        }

      </div>

    </Bounded>
  );
};

export default TeamGrid;
