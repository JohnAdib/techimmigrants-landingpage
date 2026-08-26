import { tickerTopics } from "../content/hero";

function TickerGroup() {
  return (
    <div className="ti-ticker__group">
      {tickerTopics.map((topic) => (
        <span className="ti-ticker__item" key={topic}>
          {topic}
          <i aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export function TopicTicker() {
  return (
    <div className="ti-ticker" aria-hidden="true">
      <div className="ti-ticker__track">
        <TickerGroup />
        <TickerGroup />
      </div>
    </div>
  );
}
