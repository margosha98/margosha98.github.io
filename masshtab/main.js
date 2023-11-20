let svg = document.querySelector("#svg");


let point = svg.createSVGPoint();
let viewBox = svg.viewBox.baseVal;
const baseObject = {
    width: viewBox.width,
    height: viewBox.height,
}
let zoom = {
    scaleFactor: 1.05,
};

// svg.addEventListener("wheel", onWheel);
// svg.addEventListener("resize", onWheel);

function onWheel(event) {
    console.log(baseObject, viewBox)
    event.preventDefault();

    let normalized;
    let delta = event.wheelDelta;

    if (delta) {
        normalized = (delta % 120) == 0 ? delta / 120 : delta / 12;
    } else {
        delta = event.deltaY || event.detail || 0;
        normalized = -(delta % 3 ? delta * 10 : delta / 3);
    }

    let scaleDelta = normalized > 0 ? 1 / zoom.scaleFactor : zoom.scaleFactor;

    point.x = event.clientX;
    point.y = event.clientY;

    let startPoint = point.matrixTransform(svg.getScreenCTM().inverse());


    const nextPointX = viewBox.x - (startPoint.x - viewBox.x) * (scaleDelta - 1);
    const nextPointY = viewBox.y - (startPoint.y - viewBox.y) * (scaleDelta - 1);

    if(nextPointX < 0){
        viewBox.x = 0;
    } else {
        viewBox.x = nextPointX;
    }

    if(nextPointY < 0){
        viewBox.y = 0;
    } else {
        viewBox.y = nextPointY;
    }

    if(viewBox.width * scaleDelta > baseObject.width) {
        viewBox.width = baseObject.width;
    } else {
    viewBox.width *= scaleDelta;

    }

    if(viewBox.height * scaleDelta > baseObject.height) {
        viewBox.height = baseObject.height
    } else {
    viewBox.height *= scaleDelta;
    }
}
