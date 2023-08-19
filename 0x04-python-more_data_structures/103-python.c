#include <stdio.h>
#include <Python.h>

/**
 * print_python_bytes -For Printing the bytes information
 *
 * @p: The Python Object
 * Return: no return
 */
void print_python_bytes(PyObject *p)
{
	char *string;
	long int size, j, limits;

	printf("[.] bytes object info\n");
	if (!PyBytes_Check(p))
	{
		printf("  [ERROR] Invalid Bytes Object\n");
		return;
	}

	size = ((PyVarObject *)(p))->ob_size;
	string = ((PyBytesObject *)p)->ob_sval;

	printf("  size: %ld\n", size);
	printf("  trying string: %s\n", string);

	if (size >= 10)
		limits = 10;
	else
		limits = size + 1;

	printf("  first %ld bytes:", limits);

	for (j = 0; j < limits; j++)
		if (string[j] >= 0)
			printf(" %02x", string[j]);
		else
			printf(" %02x", 256 + string[j]);

	printf("\n");
}

/**
 * print_python_list - Printing the list information
 *
 * @p: The Python Object
 * Return: no return
 */
void print_python_list(PyObject *p)
{
	long int size, j;
	PyListObject *list;
	PyObject *obj;

	size = ((PyVarObject *)(p))->ob_size;
	list = (PyListObject *)p;

	printf("[*] Python list info\n");
	printf("[*] Size of the Python List = %ld\n", size);
	printf("[*] Allocated = %ld\n", list->allocated);

	for (j = 0; j < size; j++)
	{
		obj = ((PyListObject *)p)->ob_item[j];
		printf("Element %ld: %s\n", j, ((obj)->ob_type)->tp_name);
		if (PyBytes_Check(obj))
			print_python_bytes(obj);
	}
