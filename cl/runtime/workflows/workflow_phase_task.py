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

from dataclasses import dataclass
from cl.runtime.records.dataclasses_extensions import missing
from cl.runtime.tasks.task import Task
from cl.runtime.workflows.workflow_phase_key import WorkflowPhaseKey


@dataclass(slots=True, kw_only=True)
class WorkflowPhaseTask(Task):
    """Child of the workflow task and parent of tasks assigned to the specified workflow phase."""

    phase: WorkflowPhaseKey = missing()
    """Tasks run in parallel in the order of phases, however each phase waits until its prerequisites are completed."""

    def _execute(self) -> None:
        raise NotImplementedError()