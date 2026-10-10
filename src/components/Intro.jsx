export default function Intro() {
    return (
        <div id="intro-container" className="center column">
            <svg id="intro-svg" viewBox="0 0 56 61" xmlns="http://www.w3.org/2000/svg" height="120" width="120">
                <mask id="intro-mask">
                    <rect fill="black" height="61" width="61"></rect>
                    <rect fill="white" height="61" width="61" id="loading-rect"></rect>
                </mask>
                <use href="#logo-path" fill="#091434" opacity=".1"></use>
                <use href="#logo-path" fill="#091434" mask="url(#intro-mask)"></use>
            </svg>
        </div>
    );
}
