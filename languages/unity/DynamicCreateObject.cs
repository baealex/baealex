using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DynamicCreateObject : MonoBehaviour
{
    GameObject cube_red;
    GameObject cube_blue;
    GameObject cube_green;
    GameObject cube_yellow;

    GameObject new_cube;
    Vector3 positionValue;

    void Start()
    {
        this.cube_red = GameObject.Find("Cube_Red");
        this.cube_blue = GameObject.Find("Cube_Blue");
        this.cube_green = GameObject.Find("Cube_Green");
        this.cube_yellow = GameObject.Find("Cube_Yellow");

        positionValue = new Vector3(Random.Range(-10.0f, 10.0f), 1, Random.Range(-10.0f, 10.0f));
        new_cube = (GameObject)Instantiate(cube_red, positionValue, Quaternion.identity);
        positionValue = new Vector3(Random.Range(-10.0f, 10.0f), 1, Random.Range(-10.0f, 10.0f));
        new_cube = (GameObject)Instantiate(cube_blue, positionValue, Quaternion.identity);
        positionValue = new Vector3(Random.Range(-10.0f, 10.0f), 1, Random.Range(-10.0f, 10.0f));
        new_cube = (GameObject)Instantiate(cube_green, positionValue, Quaternion.identity);
        positionValue = new Vector3(Random.Range(-10.0f, 10.0f), 1, Random.Range(-10.0f, 10.0f));
        new_cube = (GameObject)Instantiate(cube_yellow, positionValue, Quaternion.identity);
    }

    void Update()
    {
    }
}
