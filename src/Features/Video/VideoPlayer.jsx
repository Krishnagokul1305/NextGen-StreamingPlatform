const VideoPlayer = ({ src, width = "640", height = "360", controls = true }) => {
    return (
        <div>
            <video width={width} height={height} controls={controls}>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;