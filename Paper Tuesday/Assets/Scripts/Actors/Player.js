#pragma strict

public class Player extends Actor {

	private var input : InputController;

	function Update () {
		ControlAnimator();
	}
}