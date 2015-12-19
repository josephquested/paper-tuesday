#pragma strict

public class Actor extends MonoBehaviour {

	var speed : float;
	var direction : int;

	@HideInInspector var animator : Animator;

	@HideInInspector var horizontal : int;
	@HideInInspector var vertical : int;

	function Move (movement : Vector3) {
		gameObject.GetComponent(Rigidbody).velocity = movement * speed;
	}

	function ControlMovement () {
		if (horizontal != 0 || vertical != 0) {
			Move(Vector3(horizontal, 0, vertical));

		} else {
			Move(Vector3(0, 0, 0));
		}
	}

	function SetDirection (inputDirection : int) {
		direction = inputDirection;
	}

	function ControlDirection () {
		if (vertical == 1) {
			SetDirection(1);																	
		}

		if (horizontal == 1) {
			SetDirection(2);																
	 	}

	 	if (vertical == -1) {
	 		SetDirection(3);															
		}

		if (horizontal == -1) {
			SetDirection(4);																	
		}
	}

	function ControlAnimator () {
		animator.SetInteger("direction", direction);

		if (horizontal != 0 || vertical != 0) {
			animator.SetBool("walking", true);
		}

		if (horizontal == 0 && vertical == 0) {
			animator.SetBool("walking", false);
		}
	}
}