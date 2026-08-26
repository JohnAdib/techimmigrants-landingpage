import { ChannelCard } from "../components/ChannelCard";
import { SectionHeading } from "../components/SectionHeading";
import { channelsHeading, communityChannels } from "../content/channels";

export function ChannelsSection() {
  return (
    <section className="ti-section ti-shell" id="community" aria-labelledby="channels-title">
      <SectionHeading
        id="channels-title"
        eyebrow={channelsHeading.eyebrow}
        title={channelsHeading.title}
        lead={channelsHeading.lead}
        split
      />

      <div className="ti-channels">
        {communityChannels.map((channel, index) => (
          <ChannelCard
            channel={channel}
            featured={index < 2}
            index={index}
            key={channel.id}
          />
        ))}
      </div>
    </section>
  );
}
