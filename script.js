function combineText() {
  var learningObjective = document.getElementById('learningObjectiveText').value;
  var individualTasks = document.getElementById('individualTasksText').value;
  var produceSkills = document.getElementById('produceSkillText').value;
  var parameters = document.getElementById('parametersText').value;
  var learningMaterials = document.getElementById('learningMaterialsText').value;
  var assessmentInstructions = document.getElementById('fullAssessmentText').value;


  document.getElementById('learningObjectiveResult').innerHTML = learningObjective;
  document.getElementById('individualTasksResult').innerHTML = individualTasks;
  document.getElementById('skillDemonstrateResult').innerHTML = produceSkills;
  document.getElementById('parametersResult').innerHTML = parameters;
  document.getElementById('learningMaterialsResult').innerHTML = learningMaterials;
  document.getElementById('detailedInstructionsResult').innerHTML = assessmentInstructions;
  document.getElementById('finalStep').style.display = 'block';
}
function resetEntries() {
document.getElementById('learningObjectiveText').value = '';
document.getElementById('individualTasksText').value = '';
document.getElementById('produceSkillText').value = '';
document.getElementById('parametersText').value = '';
document.getElementById('learningMaterialsText').value= '';
document.getElementById('fullAssessmentText').value = '';


  document.getElementById('learningObjectiveResult').innerHTML = '';
  document.getElementById('individualTasksResult').innerHTML = '';
  document.getElementById('skillDemonstrateResult').innerHTML = '';
  document.getElementById('parametersResult').innerHTML = '';
  document.getElementById('learningMaterialsResult').innerHTML = '';
  document.getElementById('detailedInstructionsResult').innerHTML = '';
  document.getElementById('finalStep').style.display = 'none';

  var checkboxes = document.getElementsByClassName('custom-check');
  for (var i=0; i<checkboxes.length; i++) {
    if (checkboxes[i].checked = true) {
      checkboxes[i].checked = false;
    } else {
      return;
    }
  }
  }
