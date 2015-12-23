#pragma strict

public class NPC extends Actor {

	function OnMouseDown () {
		GameObject.FindGameObjectWithTag("Player").GetComponent(InputController).SetInteractionTarget(gameObject);
	}
}