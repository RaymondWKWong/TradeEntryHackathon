# Copyright (C) 2023-present The Project Contributors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from typing import Optional
import re
import json


def extract_json_from_quotes(text: str) -> Optional[str]:
    match = json_match = re.search(r'\'\'\'(.*?)\'\'\'', text, re.DOTALL)
    if match is None:
        return None
    json_string = match.groups()[0]
    try:
        return json.loads(json_string)
    except json.JSONDecodeError:
        return None
