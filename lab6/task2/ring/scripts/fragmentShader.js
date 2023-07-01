const fragmentShader = `
    uniform vec2 res;
    uniform vec2 center;
    uniform vec2 centerSecond;
    
    varying vec2 vUV;

    float pow2(float value) {
        return value * value;
    }

    void createRing(vec2 center, float borderWidth, float radius) {
        float centerNormalizeX = center.x / res.x;
        float centerNormalizeY = center.y / res.y;

        float innerRadiusX = radius / res.x;
        float innerRadiusY = radius / res.y;
        float outerRadiusX = (radius + borderWidth) / res.x;
        float outerRadiusY = (radius + borderWidth) / res.y;

        float x2 = pow2(vUV.x - centerNormalizeX);
        float y2 = pow2(vUV.y - centerNormalizeY);
        
        if ((x2 / pow2(innerRadiusX) + y2 / pow2(innerRadiusY) >= 3.0) && (x2 / pow2(outerRadiusX) + y2 / pow2(outerRadiusY) <= 3.0)) {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
        
        if ((x2 / pow2(innerRadiusX) + y2 / pow2(innerRadiusY)) <= 3.0) {
            gl_FragColor = vec4(1, 1, 1, 1);
        }
    }

    void main() {
        gl_FragColor = vec4(1,0,1,1);
        
        createRing(center, 10.0, 50.0);
        createRing(centerSecond + 440.0, 10.0, 50.0);
    }
`