"use strict";
// https://www.typescriptlang.org/play?#code/PTAEBUAsEsGdQKYA8CGBbADgGwaAxgE4IoAuC8KAdqABLgCyAMvlQG4rwDuMekoArrHKgA6ggBGAcWYkA9gCgQoIpQAmCAqFgZolSroDm+WZQBmCEiWgDYh0ACkU7AMqFoGEgDpRCAORFQA1lDRTA5UE4ULABrUBJIAll+Az543DxZdTjZATUNWBIqVVBIWU5QaBII2QJo2AAaUCLQrQRcUvLwAE8MBFcCdxJfeDlZLDsMRNZodXhBBFN+LArKWxSveRaoOERUTBxQcX5oLFV4WVNTAC5d9GwEK84a6MMAWk5KyFe019VZNE2SgAYtACAUBBhGpxcJQ2sVwoRiGQmtQ6EwWJR2PAEDg0AhKCQoTxIC1oaA-qBpig4pBcAARADy9FAAEEAAoASRRxSEVVg-1wunGsK0JC6B1IJAGRzIsCumwyqyqeDYHFAAF5ybI8Pw8QTPIjSAgAKK4-EkAAUACIVZiOFaAJQAbnktqxnhmGtAVu0un0lAMrzd9pdwdgngK4oQnnEKDw0QMiX4agAwmMal6rQBiAAMOYA7AAOOkAFitodV4cjOE8GFktisJkzpmgSAQqnLrsrEbFNfEsks-0zAEYcxgkJ2wz2o54ButMwAmMcTit2qu96MfVTxTMAVjz48n3er0dp0HnmqtJYPK67a+nNYAXhy8kgR3nOy0AHLIQnZUBoCg0SClUxCwF0-6AcB+CQFQBjkFCuBEGgsisLgVAQWM6gEC0aFgtAJjnKYNLpJWES0tQMCWHYVoAErJlaoCvKAlBlKAXRJBiLRQeksEBsIRStLgaRoMoCw4HgZDFNw+LsZxkzkPAdEMS0GYWngaDFAA1IgBIaA68quoRoFIHAVgBimZGan8Op6l48EkKaCB2QAQl0HKqOp3YzM68jQMRFrIGZhiWWuoAAGThbswUWd2GAoCojlmgSDqgAA3vIoDRQUIVxQl5pOXZs7OahCApjApyBaZOWxWuvkAL6AmA4A4ssaQYliiDJVU8SkBEuAfFgyzzD4UgyDkqgECgnAtLothZO1OLOeaoAWoJrE9bS5ILCgSxVFNBQaLpBi6AgBkKsZgTLJqU4OWmelIJaVrQuIBhYI6Lrfr+-UsXC-6GsieFkG+sCwdh8DMWkQjKEkKRYBB+UtLAgFDaAkyyIm6AjLBVQoBg2AQYB8QjDk1K8qAFwrBkaAhEoCVTZhxFA9AeDCBalC6uI+QOp4TWgAAmpxtpCSRoBYAl8GtFUlOStK-Cyk0m3CbIGAU8R7Wgyg2H1C0UPoQE8WwEIxS6OE7XUzoOA8mDR2LAQaSaH8nDUItez3LzWy0kQwxNIERB9aVBDTAg5RNh0JEQU8tQlBoDwtJAlgYHKIAvW9ixqOg5pROGNQGMAqdYMAOBG4R+cSG9rwdK8lTvM84YJ2gWAXUqlIaMDzg25ompvQa-tkB3WsaBaPcAGrGrR4DGgAGgA+s4NAsnS4++T3mvYc4SQEKzFqZa39vIAP2u7wABvICl4HABHUFgZSq6YN+kJ9svQDKuBoXgC5NDPdYNlfTqgMCcWfIACO-B8oU2oFPfmaNxawnkM-V+oB76yD6igGeBQEokBZAGHALoEHy1wMg1BM84JLASiPHE2pKhdDwZYOWyIiG4xnokQojZKAsmqtgt6CBaFShfgQpBD8mHxXtizHAdIzJUFZrw+hhChFfxEVYPAOAuG4PgXQ-hDD5FoMUWIhA-MXTJn8jUUSjCBAzysHif+ShJA31jMsDBZBNjsAIF0Ow79P6sG-vWSof95AuLcQGVueAADMlIZ4ZBvgQF0AS7BmK8YHcY6xPqsGCMUQCugLSpQyllMxcEDiajQRg+2qjcA6TQaQ8WBAKE3wvmKUAAAqcxlieG73iW3NkPi2FemHJ4YcTEAKZAtPwCx0A8SNNAJ4Bcu5QDlO-pgvR-NGgLimb5XJ8jg6cFKV6HRCzlEIG2TpFCnkRktImVM3cjQABsUzCy+V3kTEslJ6CkAGG+TUjyd5ZSyr0kJjQcyeBzP8wFwKgW7yygCoFoBfmgtheC0AkLYXQpBcisF3yEUosRRiqFvScy73uVlR5WgYCmBIC8vh7yAKkBLF875uKkVYsRfCrF9LsVwvRYylFrKmXot2aI-ZEiMGUFZhM2wlALSbNKQ6RoQNOm-xMI0PlSjxGSOFbgJpGRYASugCHKVjRcX4s+oS6laNyVvK9J8+Fmq1rMIHKQK+HC4B6q0JktBLD7UmEdbAZ1nK0XfNeGKm17q2Feuddat1dqQ2cJwWdBlILmWYq5Ymv1ELk1IoNVlVKTTLXou5WmtlCaoXhpjdKl14r8mxoLRylFAbXUlsaMW7hpaeXfN9emwFhrNhZTejPOVvimyalYGa1soqSVkteSOppGBh1viae-GlOiulXwmZCv5bLUVrOCU81iBAUZennRaNtqLQWbvnXEKaqxTAmPbF+ExUQvQ7pRtAR8CALTTonbOlid6sAEsESgqofwSC3t3fewp4gtWAfZt+zwSAuiPkaFKKgsAr27pvdB2Dj4HSbrMUQAwZCCCMHPAnOw1kBzAb3WAFZOZZkYt3C6dZ-6rpSIQIR9YJGtAoQHJAQ6GBD2eAAJwLmBfxwsjRAPkaiKeiJ6Yu7BJCbSwlrYLR8ZmZDC9yHr2qAk1gTwj4AGgCo1msSeGqmseIwGfVKK3rMbM+ZAw0r4U0yQCpiZuH8O2cMJZqF1m1UeYDA59FTnlMApmTpRDl7NPad0-pwzrmEAmYSn5gwXnGg+dZklh0nbd5eJ-v26ghTvHysoPR8JiSiNVE1AC-jNG0ssfK3YJpALhwukaqfFeOmLYnD6J3CVbcD6d3uUobY2I3YSiwPyGwwhTBTQMHZYlg8wQDOpNNlAs3zRI07hUCgG0vYcaiMsdGmNRK9X2smbGSYUiIDwl0FoOg2zLF0KLMM3IpbwEqPASJNQPZKBfDSHYKohCNH8nJfgMCUAIyTGoCInxRYczQFzRbHFQfCyEO0MousYAUEuAgSS2NcBJPM0YR7GtWawkVVwVqTQ8eHBqNhFoU1VDQEEBAp7JhzDUUMoqcEK21sEkPkdbuHW+7dYW8PHTQJaIskkPQY0X5wBzwXkvWi7WIydw3vwLer62kzbsvzggOssqn3PpfJsN9OB3yETEhKgSjAePCblthVvXHuJx2Erxn3on+Ot3EjZM8yvJOcWkqlmTsm7x7UCGbaYon7pxzS93MmvMDORrILjPG+OidK3hAnf4cABniBKwreWsMNXkG1l0PdOs4D1xaHnuuBufSG0BYQ5t-iW3bPN8GL2tZnBIsdnI5tKy+BaGIMaxgHp8n7zjDEhxcDzFUJzy6a8NBskSEdr0Ffhcr4xlNNAWTy86clHGSA1el8EC30dmVfWkB65V4f3gJ-O7n5340Wv5ob-788MKaIT-0AWlPz-tAFXeYAAv-R-VfHfe5HucQXQVQFyfgbHAgMXTwFkWiSXfmGeFyAAVSBCBHHlSyFyRAQDgIQKyUGzADEF+nb3CAcmAHJnal0AwHlkpASmgBQHEGLhWDNi2lPxWCaG4hKlcQDRQHMAiHB0aAm3alpyOkEnalzwMB3EpjSFBFwiiH4GEFhHbBJhn1FBqHbA9i51xjoXgE1AAG1d40oWJM4bgrRF0isrRGg5D4gbghM1ZTBeQbhqN6pGglBowDBvA3xBIIIiAFIhACQDMtB4pWY3tqA8QUJXFzDLC8RrCilCgSkY17CxZ8R5DIAbhhxGgLg3CLBnDQAvCAEwAZQURuEttQAAArQQKofpdgLANQhIygKw70CpAMfDGpKhMUDIxwnI6FfIy4dw0AMJLw1o9omw21VhB1aNbhforIpwoY1w0Yp5CYrKCwtopIjo+ZflFVIVVmRYvPQYvI1Yoo0AGZDY9KRIh4XY3RfZUpY47I3I4YwokgG4K5Eog3G47Yu46Yh4nAfmZ45Ys4go0Y-Mb4+QAAXU+gMNAGcHAFog5CXi9AZHEBqJxy8GAi6C1VllgB5gGJo2az5kYBT1VniAuz4E3lAGiFYmdkVj4Vfm22KABlwDrFNnyF4NiJqAghQ1FnsGcBdXUF1hyC5iaHYOViQROAewJEn1wFP2+2ahyGTHBkKCh3iB2HZC5GpHGEsAOGgI+NGmkGqNjGNhZwZF6EoGkFJGJGqLJlYQQFeEAl4FOlFCjGKG1O8EFlB0NmiOMDQEAjUH9JQFuz2XwwpgIGwn-BUGjM1IDC0JJyIHxCVIRNkAQy2k5LyGKEEFW0FCIjIGoA2jRg4DFSMFkAxKxK0IQGu2NMYBaG1JYCGkaAqLmjIC1hLKNjsBMGEhgCCXCB7KQWTEkivgzNkj9NpjACoC4yOi4JhF-G8A3kaC9gGnZIGHGRHxNIRGFxRCaAIAZjVlwivzRmCD0jBEMn5IlQSgqC9BzH-msAAB5GSwRP8ljIB7ytItJQ8sp4S-idkjCTDoBoTPA-iSt4SiTCkAKgLXyTiwLLpwSLB-ypRYBALgKEKSA4KW4EEySVRulBdPAHIWQNFxAcKPVxV-9wD0BGg-jN0e4gZkAiKmTOlOTEDsLtQyKHC3z8DPAgRGAGQWRwAX9s4EBGhETkTUSmkSw3jyZJLaKdN8Q2CcAKF94kBGLpQWR9zwc1piLSK2ES9PZZImxNT4BhReyEAIdcB+xVT-wqA9yDzHseTXFDIoCYDiDzBECe5jRGBjQZc5cZ4UC0CMDsDcDaJuK2S3Kh4sMG8wBnBEL+BVZ+RxkDCqASB4B+TYyNBDAF8W4vxMD6Be0UDwAOQUxvKhTNQlw7yjIcq8qZ4x4J5irjQyrQASxoqIBXExJVB+AL5+zMcIF0IocqI7NvR6JKBGJVsUBdAdYlBKgxIQjzR4Bw4gyIIOSCR4BQYkhThsppZKAWhiBeAx92crAXtYJpgglbLMhig4cEdWhgzZoqhIhMImDKZuA4xoh9DLpcr8qOQvw6QGqmqrlWqUwdz2p6ZwciIVhGDUqkEMx2p6KQZO5YAqrwRmYoiH0Q5QAgQhEQkFwNKGYLRPqCr6qSrGqJkxKUTjQJkCa6qiqUxGrfJ4SYCWZhBNRYRyhMDTZhwrlcatKCa2RCrirSrKaarvrfrabnB7lLycAqhrBKt7zQAnzeb+bibnAPyvz0pd54SUB5iClQByVIBZwih-gskJk9bPBOQJkFxMLwRiksEY0vRTaL0-hd8jNTbzamlLaNbLpEwkgMA2QpQvRrAmkyaJLQAqbx4abGqjUx9wRASEBBV1SRVNRTbYBgF7YLQHbDbnbN14TY7tkk7SB9bHajaXaC6zauR3araqhY7oF874gDa1Bi6LaplK7KjujKE6kIJa7C7M7jb3biSo7JbEKajbz-5h6nyWrajPzvzvl4S4a-bZNvb4r56aNh6g6kTyaSssoUbyATC57-adIFxoSvQbbSlrEYrUjcYY14Vt6UK97NAdIQkj7CkuiqkeiO6z7WQX7ry0JalqFr624mbb6r9l6dISwn6mhtaeEyjP6qjGdLh-7+Ud676aNdxwHY747mMP6MG1U1ZRZY6kFEhjstpD16ggUcxMt0Ub7d7gH97QArk0G9kVEY0P7tkEokgodoEta4AEGlEkGaH77QB8wGH9j9EWG7a2HrLOHqpd5Gpd4lA0xaddAjREat6AGoiTDF7fapRwGqHNGQGET16Q7D6vRXgSTVHEGUK9HaHg7jQdG1Gd6rGBGbGJlH6vQtIzG95eHLGkwtGBHhw7GLGNGfH9HnGdJ-GTGPHdHgnrHDGKa+6wmAmvGgmfaQnYmXHiTwH3Go6Ga1BAHl7NRA7Q7hafq-qW7kGCmhb8rqbSnd5Gb1G6nyB57EnkB56SsGmUL2n9GwGA7cn6nenGnaHwnB1+H+7an+mOnxn9HXGCnxnALJnaHjHhmVL9GPasp2m5nGcoj9HUGY9lnaGQkWs+Y2RSzeD2pVBSBqQ5y6yx9gYSB5AoD4D3K6QLmkCAqWR0CsCcC8DPHAHuLESBLiqZ46RJcRAVcjgEDnnCgkCvKfLZd5c3mPngrvn2m-nwAAWUwgWQX7l4SWlMD9AUM0BdLl18KHI8XjFd0iWTBQCFsADGgrRTkxkEAPoka+QL7wBGWvQLQPgG7OBawNACXmNQAAAfIV0ASFs6ECsoPfPmZwC+0WWMeMReqHT7DXKnQ4cWeMe5jrHABKKPGoEhhFf5fVMg1kIaNiKIDAWCGCKgWEcbFnYnLaOGjvDQLVzwBSyUpAlybyn6sF3PVQIEYcpA5wWiDFlkRgNkBebihkL8Y0E12KpWa5xUW5-8cU9qRYVGWwF9XBgfNcV1zZOsNOqFItbsLceIBtbsM8dYE1oGwg32AgZMV4G+FWf8SaaaJoVGRQraRUQ66AeQGvYc7pFbPEY2nJK6TwIxAl4cUwC0XF-FkxSlygRoZTblp2PlggAVnBkVsVo0Hmek425iG29lvEVKMAUcPMX9CvHVjynTFMBkPi2iIKr5h9lyDkcAOSzwVtzgQqeapA9elkL8aQRqxoAmkWv6ypwmmm0q7izAr8ZwDkSQGNukBXBkCef5TdIgUBcgW2sZMiiPTOGvHfM6FrB0aVhs1QeELaVmjqNUJaObU2eUmnQcUSHAUlVSdWLabAcHJV1QeQGyXUc0GMTILoTwPGK01QcqE4TyMMatogRnI0s09vIy3qwUkEcjg0iCZwfgcQF9G7JQBOEgJOK4EAGo5DGYVQGsWEEgWgrTnT4AXcBcfkaER8Go4AIAA
const canvas = document.querySelector('#canvas');
canvas.id = 'spinning-canvas';
canvas.style.backgroundColor = '#0078d4';
canvas.style.position = 'absolute';
canvas.style.inset = '0';
canvas.style.width = '500px';
canvas.style.height = '400px';
canvas.style.margin = 'auto';
const existingCanvas = document.getElementById(canvas.id);
if (existingCanvas && existingCanvas.parentElement) {
    existingCanvas.parentElement.removeChild(existingCanvas);
}
const gl = canvas.getContext('webgl');
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, `
precision lowp float;

attribute vec2 a_position;
attribute float a_startAngle;
attribute float a_angularVelocity;
attribute float a_rotationAxisAngle;
attribute float a_particleDistance;
attribute float a_particleAngle;
attribute float a_particleY;
uniform float u_time;

varying vec2 v_position;
varying vec3 v_color;
varying float v_overlight;

void main() {
  float angle = a_startAngle + a_angularVelocity * u_time;
  float vertPosition = 1.1 - mod(u_time * .25 + a_particleY, 2.2);
  float viewAngle = a_particleAngle + mod(u_time * .25, 6.28);

  mat4 vMatrix = mat4(
    1.3, 0.0, 0.0, 0.0,
    0.0, 1.3, 0.0, 0.0,
    0.0, 0.0, 1.0, 1.0,
    0.0, 0.0, 0.0, 1.0
  );

  mat4 shiftMatrix = mat4(
    1.0, 0.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    a_particleDistance * sin(viewAngle), vertPosition, a_particleDistance * cos(viewAngle), 1.0
  );

  mat4 pMatrix = mat4(
    cos(a_rotationAxisAngle), sin(a_rotationAxisAngle), 0.0, 0.0,
    -sin(a_rotationAxisAngle), cos(a_rotationAxisAngle), 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
  ) * mat4(
    1.0, 0.0, 0.0, 0.0,
    0.0, cos(angle), sin(angle), 0.0,
    0.0, -sin(angle), cos(angle), 0.0,
    0.0, 0.0, 0.0, 1.0
  );

  gl_Position = vMatrix * shiftMatrix * pMatrix * vec4(a_position * 0.03, 0.0, 1.0);
  vec4 normal = vec4(0.0, 0.0, 1.0, 0.0);
  vec4 transformedNormal = normalize(pMatrix * normal);

  float dotNormal = abs(dot(normal.xyz, transformedNormal.xyz));
  float regularLighting = dotNormal / 2.0 + 0.5;
  float glanceLighting = smoothstep(0.92, 0.98, dotNormal);
  v_color = vec3(
    mix((0.5 - transformedNormal.z / 2.0) * regularLighting, 1.0, glanceLighting),
    mix(0.5 * regularLighting, 1.0, glanceLighting),
    mix((0.5 + transformedNormal.z / 2.0) * regularLighting, 1.0, glanceLighting)
  );

  v_position = a_position;
  v_overlight = 0.9 + glanceLighting * 0.1;
}
`);
gl.compileShader(vertexShader);
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, `
precision lowp float;
varying vec2 v_position;
varying vec3 v_color;
varying float v_overlight;

void main() {
  gl_FragColor = vec4(v_color, 1.0 - smoothstep(0.8, v_overlight, length(v_position)));
}
`);
gl.compileShader(fragmentShader);
const shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vertexShader);
gl.attachShader(shaderProgram, fragmentShader);
gl.linkProgram(shaderProgram);
gl.useProgram(shaderProgram);
gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
const attrs = [
    { name: 'a_position', length: 2, offset: 0 },
    { name: 'a_startAngle', length: 1, offset: 2 },
    { name: 'a_angularVelocity', length: 1, offset: 3 },
    { name: 'a_rotationAxisAngle', length: 1, offset: 4 },
    { name: 'a_particleDistance', length: 1, offset: 5 },
    { name: 'a_particleAngle', length: 1, offset: 6 },
    { name: 'a_particleY', length: 1, offset: 7 },
];
const STRIDE = Object.keys(attrs).length + 1;
for (let i = 0; i < attrs.length; i++) {
    const name = attrs[i].name;
    const length = attrs[i].length;
    const offset = attrs[i].offset;
    const attribLocation = gl.getAttribLocation(shaderProgram, name);
    gl.vertexAttribPointer(attribLocation, length, gl.FLOAT, false, STRIDE * 4, offset * 4);
    gl.enableVertexAttribArray(attribLocation);
}
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
const NUM_PARTICLES = 200;
const NUM_VERTICES = 4;
const NUM_INDICES = 6;
const vertices = new Float32Array(NUM_PARTICLES * STRIDE * NUM_VERTICES);
const indices = new Uint16Array(NUM_PARTICLES * NUM_INDICES);
for (let i = 0; i < NUM_PARTICLES; i++) {
    const axisAngle = Math.random() * Math.PI * 2;
    const startAngle = Math.random() * Math.PI * 2;
    const groupPtr = i * STRIDE * NUM_VERTICES;
    const particleDistance = Math.sqrt(Math.random());
    const particleAngle = Math.random() * Math.PI * 2;
    const particleY = Math.random() * 2.2;
    const angularVelocity = Math.random() * 2 + 1;
    for (let j = 0; j < 4; j++) {
        const vertexPtr = groupPtr + j * STRIDE;
        vertices[vertexPtr + 2] = startAngle;
        vertices[vertexPtr + 3] = angularVelocity;
        vertices[vertexPtr + 4] = axisAngle;
        vertices[vertexPtr + 5] = particleDistance;
        vertices[vertexPtr + 6] = particleAngle;
        vertices[vertexPtr + 7] = particleY;
    }
    vertices[groupPtr] = vertices[groupPtr + STRIDE * 2] = -1;
    vertices[groupPtr + STRIDE] = vertices[groupPtr + STRIDE * 3] = +1;
    vertices[groupPtr + 1] = vertices[groupPtr + STRIDE + 1] = -1;
    vertices[groupPtr + STRIDE * 2 + 1] = vertices[groupPtr + STRIDE * 3 + 1] = +1;
    const indicesPtr = i * NUM_INDICES;
    const vertexPtr = i * NUM_VERTICES;
    indices[indicesPtr] = vertexPtr;
    indices[indicesPtr + 4] = indices[indicesPtr + 1] = vertexPtr + 1;
    indices[indicesPtr + 3] = indices[indicesPtr + 2] = vertexPtr + 2;
    indices[indicesPtr + 5] = vertexPtr + 3;
}
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
const timeUniformLocation = gl.getUniformLocation(shaderProgram, 'u_time');
const startTime = (window.performance || Date).now();
gl.clearColor(0, 0, 0, 1);
gl.enable(gl.BLEND);
gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
gl.viewport(0, 0, canvas.width, canvas.height);
(function frame() {
    gl.uniform1f(timeUniformLocation, ((window.performance || Date).now() - startTime) / 1000);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawElements(gl.TRIANGLES, NUM_INDICES * NUM_PARTICLES, gl.UNSIGNED_SHORT, 0);
    requestAnimationFrame(frame);
})();
document.body.appendChild(canvas);
