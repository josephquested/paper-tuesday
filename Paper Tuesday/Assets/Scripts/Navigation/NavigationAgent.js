#pragma strict

public class NavigationAgent extends MonoBehaviour {

    var actor : Actor;
	var agent : NavMeshAgent;
	var goal : Vector3;

    function Start () {
        actor = gameObject.GetComponent(Actor);
		agent = gameObject.GetComponent(NavMeshAgent);
		agent.updateRotation = false;
    }

    function Update () {
    	actor.SetDirection(Utility.GenerateIntFromVector(agent.velocity));
        agent.speed = actor.speed;
    	
    	if (goal != null) {
    		agent.destination = goal;
    	}
    }

    function SetGoal (inputGoal : Vector3) {
        goal = inputGoal;
    }
}
