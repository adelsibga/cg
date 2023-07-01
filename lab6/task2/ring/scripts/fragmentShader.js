const fragmentShader = `
    uniform vec2 res;
    uniform vec2 center;
    
    varying vec2 vUV;

    float pow2(float value) {
        return value * value;
    }

    void createRing(vec2 center, float borderWidth, float radius) {
        vec2 centerNormalize = center / res;

        float innerRadiusX = radius / res.x;
        float innerRadiusY = radius / res.y;
        float outerRadiusX = (radius + borderWidth) / res.x;
        float outerRadiusY = (radius + borderWidth) / res.y;

        float x2 = pow2(vUV.x - centerNormalize.x);
        float y2 = pow2(vUV.y - centerNormalize.y);
        
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
        createRing(center + 200.0, 10.0, 50.0);
    }
`