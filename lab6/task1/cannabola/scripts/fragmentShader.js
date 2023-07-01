const fragmentShader = `
    uniform vec2 res;

    void main() {
        vec2 coordinates = gl_FragCoord.xy/res.xy;
        gl_FragColor = vec4(coordinates.y, coordinates.x, coordinates.x, 1);
    }
`