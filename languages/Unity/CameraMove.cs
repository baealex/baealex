using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraMove : MonoBehaviour
{
    int speed = 5;
    int rotate = 50;

    void Start()
    {
    }
    
    void Update()
    {
        moveObject();
    }
    void moveObject()
    {
        if(Input.GetKey(KeyCode.RightArrow) || Input.GetKey(KeyCode.D))
        {
            transform.Translate(Vector3.right * speed * Time.smoothDeltaTime, Space.World);
        }

        if (Input.GetKey(KeyCode.LeftArrow) || Input.GetKey(KeyCode.A))
        {
            transform.Translate(Vector3.right * speed * Time.smoothDeltaTime * -1, Space.World);
        }

        if (Input.GetKey(KeyCode.UpArrow) || Input.GetKey(KeyCode.W))
        {
            transform.Translate(Vector3.forward * speed * Time.smoothDeltaTime, Space.World);
        }

        if (Input.GetKey(KeyCode.DownArrow) || Input.GetKey(KeyCode.S))
        {
            transform.Translate(Vector3.forward * speed * Time.smoothDeltaTime * -1, Space.World);
        }

        if (Input.GetKey(KeyCode.E))
        {
            transform.Rotate(Vector3.up * rotate * Time.smoothDeltaTime, Space.World);
        }

        if (Input.GetKey(KeyCode.Q))
        {
            transform.Rotate(Vector3.up * rotate * Time.smoothDeltaTime * -1, Space.World);
        }

        if (Input.GetKey(KeyCode.Space))
        {
            transform.Translate(Vector3.up * speed * Time.smoothDeltaTime, Space.World);
        }

        if (Input.GetKey(KeyCode.LeftControl))
        {
            transform.Translate(Vector3.up * speed * Time.smoothDeltaTime * -1, Space.World);
        }
    }
}
