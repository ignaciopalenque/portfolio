import React from 'react';

const ProyectoVideo = ({videoProyecto}) => {

console.log('EL video es: '+videoProyecto);


let videoActivo = '';

 switch (videoProyecto) {
        case 'emplearavel':
            videoActivo = 'video/landing-video.mp4';
            break;
        default:
            videoActivo = 'video/landing-video.mp4';
            break;
    }


    return (

            <video width="100%" height="100%" controls>
                <source src={videoActivo} type="video/mp4" />
            </video>

        );




}
export default ProyectoVideo;