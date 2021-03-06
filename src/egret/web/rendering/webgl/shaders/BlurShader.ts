//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
module egret.web {
    /**
     * @private
     */
    export class BlurShader extends TextureShader {
        public fragmentSrc =
            "precision mediump float;"+

            "uniform vec2 blur;"+
            "uniform sampler2D uSampler;"+

            "varying vec2 vTextureCoord;"+

            "uniform vec4 uBounds;"+

            "void main()"+
            "{"+
                "gl_FragColor = vec4(0.0);"+
                "vec2 uv = (vTextureCoord + vec2(-0.028 * blur.x, -0.028 * blur.y));if(uv.x >= uBounds[0] && uv.x <= uBounds[2] && uv.y >= uBounds[1] && uv.y <= uBounds[3]) gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.028 * blur.x, -0.028 * blur.y))) * 0.0044299121055113265;" +
                "uv = (vTextureCoord + vec2(-0.024 * blur.x, -0.024 * blur.y));if(uv.x >= uBounds[0] && uv.x <= uBounds[2] && uv.y >= uBounds[1] && uv.y <= uBounds[3]) gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.024 * blur.x, -0.024 * blur.y))) * 0.00895781211794;" +
                "uv = (vTextureCoord + vec2(-0.020 * blur.x, -0.020 * blur.y));if(uv.x >= uBounds[0] && uv.x <= uBounds[2] && uv.y >= uBounds[1] && uv.y <= uBounds[3]) gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.020 * blur.x, -0.020 * blur.y))) * 0.0215963866053;" +
                "uv = (vTextureCoord + vec2(-0.016 * blur.x, -0.016 * blur.y));if(uv.x >= uBounds[0] && uv.x <= uBounds[2] && uv.y >= uBounds[1] && uv.y <= uBounds[3]) gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.016 * blur.x, -0.016 * blur.y))) * 0.0443683338718;" +
                "uv = (vTextureCoord + vec2(-0.012 * blur.x, -0.012 * blur.y));if(uv.x >= uBounds[0] && uv.x <= uBounds[2] && uv.y >= uBounds[1] && uv.y <= uBounds[3]) gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.012 * blur.x, -0.012 * blur.y))) * 0.0776744219933;" +
                "uv = (vTextureCoord + vec2(-0.008 * blur.x, -0.008 * blur.y));if(uv.x >= uBounds[0] && uv.x <= uBounds[2] && uv.y >= uBounds[1] && uv.y <= uBounds[3]) gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.008 * blur.x, -0.008 * blur.y))) * 0.115876621105;" +
                "uv = (vTextureCoord + vec2(-0.004 * blur.x, -0.004 * blur.y));if(uv.x >= uBounds[0] && uv.x <= uBounds[2] && uv.y >= uBounds[1] && uv.y <= uBounds[3]) gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.004 * blur.x, -0.004 * blur.y))) * 0.147308056121;" +
                "uv = (vTextureCoord);if(uv.x >= uBounds[0] && uv.x <= uBounds[2] && uv.y >= uBounds[1] && uv.y <= uBounds[3]) gl_FragColor += texture2D(uSampler, vTextureCoord) * 0.159576912161;" +
                "uv = (vTextureCoord + vec2(0.004 * blur.x, 0.004 * blur.y));if(uv.x >= uBounds[0] && uv.x <= uBounds[2] && uv.y >= uBounds[1] && uv.y <= uBounds[3]) gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.004 * blur.x,  0.004 * blur.y))) * 0.147308056121;" +
                "uv = (vTextureCoord + vec2(0.008 * blur.x, 0.008 * blur.y));if(uv.x >= uBounds[0] && uv.x <= uBounds[2] && uv.y >= uBounds[1] && uv.y <= uBounds[3]) gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.008 * blur.x,  0.008 * blur.y))) * 0.115876621105;" +
                "uv = (vTextureCoord + vec2(0.012 * blur.x, 0.012 * blur.y));if(uv.x >= uBounds[0] && uv.x <= uBounds[2] && uv.y >= uBounds[1] && uv.y <= uBounds[3]) gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.012 * blur.x,  0.012 * blur.y))) * 0.0776744219933;" +
                "uv = (vTextureCoord + vec2(0.016 * blur.x, 0.016 * blur.y));if(uv.x >= uBounds[0] && uv.x <= uBounds[2] && uv.y >= uBounds[1] && uv.y <= uBounds[3]) gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.016 * blur.x,  0.016 * blur.y))) * 0.0443683338718;" +
                "uv = (vTextureCoord + vec2(0.020 * blur.x, 0.020 * blur.y));if(uv.x >= uBounds[0] && uv.x <= uBounds[2] && uv.y >= uBounds[1] && uv.y <= uBounds[3]) gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.020 * blur.x,  0.020 * blur.y))) * 0.0215963866053;" +
                "uv = (vTextureCoord + vec2(0.024 * blur.x, 0.024 * blur.y));if(uv.x >= uBounds[0] && uv.x <= uBounds[2] && uv.y >= uBounds[1] && uv.y <= uBounds[3]) gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.024 * blur.x,  0.024 * blur.y))) * 0.00895781211794;" +
                "uv = (vTextureCoord + vec2(0.028 * blur.x, 0.028 * blur.y));if(uv.x >= uBounds[0] && uv.x <= uBounds[2] && uv.y >= uBounds[1] && uv.y <= uBounds[3]) gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.028 * blur.x,  0.028 * blur.y))) * 0.0044299121055113265;" +
            "}";

        public uniforms = {
            projectionVector: {type: '2f', value: {x: 0, y: 0}, dirty: true},
            blur: {type: '2f', value: {x: 2, y: 2}, dirty: true},
            uBounds: {type: '4f', value: {x: 0, y: 0, z: 1, w: 1}, dirty: true}
        };

        public setBlur(blurX:number, blurY:number):void {
            var uniform = this.uniforms.blur;

            if(uniform.value.x != blurX || uniform.value.y != blurY) {
                uniform.value.x = blurX;
                uniform.value.y = blurY;

                uniform.dirty = true;
            }
        }

        /**
         * 设置模糊滤镜需要传入的uv坐标
         */
        public setUv(uv:any):void {
            var uniform = this.uniforms.uBounds;

            if(uv) {
                if(uniform.value.x != uv[0] || uniform.value.y != uv[1] || uniform.value.z != uv[2] || uniform.value.w != uv[3]) {
                    uniform.value.x = uv[0];
                    uniform.value.y = uv[1];
                    uniform.value.z = uv[2];
                    uniform.value.w = uv[3];

                    uniform.dirty = true;
                }
            } else {
                if(uniform.value.x != 0 || uniform.value.y != 0 || uniform.value.z != 1 || uniform.value.w != 1) {
                    uniform.value.x = 0;
                    uniform.value.y = 0;
                    uniform.value.z = 1;
                    uniform.value.w = 1;

                    uniform.dirty = true;
                }
            }
        }
    }
}