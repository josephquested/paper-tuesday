#pragma strict

private var bounceComplete : boolean;

function OnEnable () {
	bounceComplete = true;
}

function Update () {
	if (bounceComplete) {
		Bounce();
	}
}

function SetInteractionTarget (target : GameObject) {
	bounceComplete = true;
	print("Set interaction!");
	transform.localPosition = target.transform.localPosition;
	transform.localPosition.z += 1;
}

function SetMovementTarget (position : Vector3) {
	print("Set movement!");
	bounceComplete = true;
	transform.localPosition = position;
	transform.localPosition.z += 0.05;
}

function Bounce () {
	var bounceSpeed : float = 0.01;
	var bounceDegree : float = 0.2;
	var maxZ : float = transform.localPosition.z + bounceDegree;
	var minZ : float = transform.localPosition.z;

	bounceComplete = false;

	while (transform.localPosition.z < maxZ && !bounceComplete) {
		transform.localPosition.z += bounceSpeed;
		//print("movin' up!");
		yield;
	}

	while (transform.localPosition.z > minZ && !bounceComplete) {
		transform.localPosition.z -= bounceSpeed;
		//print("movin' down!");
		yield;
	}

	bounceComplete = true;
}