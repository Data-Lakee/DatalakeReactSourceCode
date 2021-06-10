import React, { useState } from 'react'
import './Home.css'
import ML from './img/machlear.png'
import CV from './img/compvis.svg'

function Home() {
    const dataFieldList = ['Machine Learning', 'Computer Vision']
    const [dataField, setDataField] = useState(0)
    const dataImageList = [ML, CV]
    const [dataImage, setDataImage] = useState(dataImageList[dataField])

    //vh = document.documentElement.clientHeight

    function handleScroll(e) {
        //console.log(document.documentElement.clientHeight)
        if (e.target.scrollTop > (document.documentElement.clientHeight * 0.1)) {
            document.getElementById('header').classList.add('headerScrolled')
        }
        else {
            document.getElementById('header').classList.remove('headerScrolled')
        }
        if (e.target.scrollTop > (document.documentElement.clientHeight / 2)) {
            document.getElementById('fieldOptionsContainer').classList.add('fieldOptionsAnimation')
        }
        else {
            document.getElementById('fieldOptionsContainer').classList.remove('fieldOptionsAnimation')
        }
    }

    function decrementFieldOption() {
        if (dataField === 0) {
            setDataField(dataFieldList.length - 1)
        }
        else {
            setDataField(dataField - 1)
        }
    }

    function incrementFieldOption() {
        if (dataField === dataFieldList.length - 1) {
            setDataField(0)
        }
        else {
            setDataField(dataField + 1)
        }
    }

    return (
        <div id="homeRoot" onScroll={handleScroll}>
            <div id="homeBG0" />
            <div id="homeBG1Wrapper" className="homeScrollChild">
                <svg id="homeBG1" viewBox="0 0 1920 1080" preserveAspectRatio="xMinYMin slice" fill="#335AE4" xmlns="http://www.w3.org/2000/svg">
                    <svg x="0" y="0">
                        <path d="M0 1080H669.885C671.048 1077.87 672.178 1075.73 673.292 1073.54L903.039 622.717C947.362 535.742 1059.47 509.872 1137.42 568.63L1266.7 666.073C1358.54 735.301 1491.21 694.556 1528.36 585.709L1616.63 327.099C1651.65 224.524 1740.26 149.532 1847.21 131.96L1920 120V0H0V1080Z" />
                    </svg>
                    <defs>
                        <linearGradient id="G1" y2="100%">
                            <stop id="c1" offset="0%" stopColor="#335AE4" />
                            <stop id="c2" offset="50%" stopColor="#a238e9" />
                            <stop id="c3" offset="100%" stopColor="#e4336b" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <span id="ABCD">
                Time to show off <br />
                your Data skills.
            </span>

            <div id="fieldOptionsContainer" className="homeScrollChild">
                <span id="fieldOptions">
                    <button className="chevronButton" onClick={decrementFieldOption}>
                        &#8249;
                    </button>
                    <span id="CDEF">
                        {dataFieldList[dataField]}
                    </span>
                    <button className="chevronButton" onClick={incrementFieldOption}>
                        &#8250;
                    </button>
                    <span id="BCDE">
                        {" "} & More
                    </span>
                </span>
                
                <img id="fieldImage" src={dataImageList[dataField]} />
            </div>
        </div>

    )
}

export default Home
