#pragma strict

public class Player extends Actor {

	private var input : InputController;

	function Awake () {
		input = gameObject.GetComponent(InputController);
		animator = gameObject.GetComponent(Animator);
	}

	function Update () {
		ControlAnimator();
		ControlInput();
		ControlDirection();
		ControlMovement();
	}

	function ControlInput() {
		horizontal = input.horizontal;
		vertical = input.vertical;
	}
}