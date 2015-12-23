#pragma strict

public class Player extends Actor {

	private var input : InputController;

	function Update () {
		ControlAnimator();
	}

	function OnTriggerStay (collider : Collider) {
		if (collider.tag == "Page") {
			GameObject.Find("Main Camera").GetComponent(CameraController).MoveToPage(collider.gameObject);
		}
	}

	function SetInteractionTarget (target : GameObject) {
		print(target.name);
		GameObject.Find("Interaction Arrow").GetComponent(InteractionArrow).SetInteractionTarget(target);
	}
}