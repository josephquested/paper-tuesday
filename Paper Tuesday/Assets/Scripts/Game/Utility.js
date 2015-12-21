#pragma strict

public static class Utility {

	function GenerateIntFromVector (velocity : Vector3) {
 		var dotEast : float = Vector3.Dot(Vector3.right, velocity.normalized);
 		var dotNorth : float = Vector3.Dot(Vector3.forward, velocity.normalized);
 		
 		if (Mathf.Abs(dotEast) > Mathf.Abs(dotNorth)) {
     		if (velocity.x > 0) {
     			return 2;
     		} else {
     			return 4;
     		}

 		} else {
     		if (velocity.z > 0) {
     			return 1;
     		} else {
     			return 3;
     		}
	    }
	}

	function GenerateRandomIntBetween(minimum : int, inputMaximum : int) {
		var maximum : int = inputMaximum + 1;		
		var generatedInt : int = Random.Range(minimum, maximum);
		return generatedInt;
	}

	function GenerateRandomFloatBetween(minimum : float, maximum : float) {
		var generatedFloat : float = Random.Range(minimum, maximum);
		return generatedFloat;
	}

	function GenerateBoolean() {
		var generatedBool : boolean;
		var generatedInt : int = GenerateRandomIntBetween(0, 1);

		if (generatedInt == 0) {
			generatedBool = true;

		} else {
			generatedBool = false;
		}

		return generatedBool;
	}
}