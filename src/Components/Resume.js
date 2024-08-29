import './Resume.css';

function Resume() {
    return (
        <div>
            <h1>Are You Excited to See My Resume?</h1>
            <div>
                <form>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="https://drive.google.com/file/d/14N0ogGMxOq_HDmpTJPH_QY1t30gNT0BF/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                        <button type="button" id="r1">YES</button>
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="/">
                        <button type="button" id="r2">NO</button>
                    </a>
                </form>
            </div>
        </div>
    );
}

export default Resume;
