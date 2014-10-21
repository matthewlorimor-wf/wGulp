/*
 * Copyright 2014 Workiva, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = function(gulp, defaults){
    gulp.desc('copy', 'Copy files');

    return function(config) {
        if(!config)
            config = {};

        return function () {
            var changed = require('gulp-changed');

            var stream;
            if(config.src)
                stream = gulp.src(config.src);
            else {
                stream = gulp.src(config.glob || defaults.glob.all, {
                    cwd: config.cwd || defaults.path.src
                });
            }

            if(config.changed)
                stream = stream.pipe(changed(config.dest || defaults.path.buildSrc))
            
            return stream.pipe(gulp.dest(config.dest || defaults.path.buildSrc));
        };
    };
};
