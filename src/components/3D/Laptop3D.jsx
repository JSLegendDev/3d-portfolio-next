'use client'
import { useEffect } from "react"
import Zdog from 'zdog'

function make3DLaptop() {
    let isSpinning = true;

    let illo = new Zdog.Illustration({
        element: '.zdog-canvas',
        dragRotate: true,
        // stop spinning when drag starts
        // onDragStart: function() {
        //     isSpinning = false;
        // },
    });

    // circle
    new Zdog.Ellipse({
        addTo: illo,
        diameter: 80,
        translate: { z: 40 },
        stroke: 20,
        color: '#636',
    })

    function animate() {
        illo.rotate.y += isSpinning ? 0.03 : 0;
        illo.updateRenderGraph();
        requestAnimationFrame( animate );
    }
    animate()
}

export default function Laptop3D() {

    useEffect(() => {
        make3DLaptop()
    }, [])

    return <canvas className="zdog-canvas"></canvas>
}