import { IoColorPaletteOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export default function ThemeControls({ t, palette, onPaletteToggle, dark, onDarkToggle }) {
  const paletteLabel = palette === "warm" ? t.switchToBlue : t.switchToWarm;
  const modeLabel = dark ? t.switchToLight : t.switchToDark;

  return (
    <div className="theme-controls" aria-label={t.appearanceControls}>
      <button className="icon-button" type="button" onClick={onPaletteToggle} aria-label={paletteLabel} title={paletteLabel}>
        <IoColorPaletteOutline aria-hidden="true" />
      </button>
      <button className="icon-button" type="button" onClick={onDarkToggle} aria-label={modeLabel} title={modeLabel} aria-pressed={dark}>
        {dark ? <IoSunnyOutline aria-hidden="true" /> : <IoMoonOutline aria-hidden="true" />}
      </button>
    </div>
  );
}
