#pragma strict

public class Actor extends MonoBehaviour {

	var speed : float;

	private var direction : int;
	private var animator : Animator;

	function SetDirection (inputDirection : int) {
		direction = inputDirection;
	}

	function ControlAnimator () {
		var animator : Animator = gameObject.GetComponent(Animator);
		var agent : NavMeshAgent = gameObject.GetComponent(NavMeshAgent);
		
		SetDirection(Utility.GenerateIntFromVector(agent.velocity));
		animator.SetInteger("direction", direction);

		if (agent.velocity != Vector3(0, 0, 0)) {
			animator.SetBool("walking", true);

		} else {
			animator.SetBool("walking", false);
		}
	}
}