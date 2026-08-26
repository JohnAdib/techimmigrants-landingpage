import { heroContent } from "../content/hero";
import { platforms } from "../content/platforms";
import { currentMonth, currentYearMonth } from "../reportingPeriod";
import { ChannelRow } from "./ChannelRow";
import { LiveDot } from "./LiveDot";
import { MetricValue } from "./MetricValue";

export function ChannelBoard() {
  const { board } = heroContent;

  return (
    <aside className="ti-board" aria-label={board.title}>
      <header className="ti-board__head">
        <span className="ti-label">
          <LiveDot />
          {board.title}
        </span>
        <time className="ti-label" dateTime={currentYearMonth}>
          {currentMonth}
        </time>
      </header>

      <div className="ti-board__list">
        <span className="ti-board__sweep" aria-hidden="true" />
        {platforms.map((platform) => (
          <ChannelRow key={platform.id} platform={platform} />
        ))}
      </div>

      <footer className="ti-board__foot">
        <span>{board.note}</span>
        <span className="ti-board__total">
          <MetricValue value={board.total} />
          <small>{board.totalLabel}</small>
        </span>
      </footer>
    </aside>
  );
}
