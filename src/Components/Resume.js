import './Resume.css';

function Resume() {
    return (
        <div>
            <h1>Are You Excited to See My Resume?</h1>
            <div>
                <form>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="https://drive.google.com/file/d/14Q_TlCa9uTCSZ0ilS1LavVOX_hOpFRsp/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
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
