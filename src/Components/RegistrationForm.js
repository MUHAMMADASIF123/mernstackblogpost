import React, { useState } from 'react';
import uniqid from 'uniqid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function RegistrationForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const history = useNavigate();
  const { name, email, password, cpassword } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [intermediate, setIntermediate] = useState({
    year: '',
    roll_number: 0,
    obtain_marks: 0,
    total_marks: 0,
    percentage: 0,
    subject: '',
    board: '',
    institute: '',
  });
  const [graduate, setGraduate] = useState({
    year: '',
    roll_number: 0,
    obtain_marks: 0,
    total_marks: 0,
    percentage: 0,
    subject: '',
    board: '',
    institute: '',
  });
  const [metric, setMetric] = useState({
    year: '',
    roll_number: 0,
    obtain_marks: 0,
    total_marks: 0,
    percentage: 0,
    subject: '',
    board: '',
    institute: '',
  });
  const [form, setForm] = useState({
    shift: 'Morning',
    program: 'intermediate',
    programList: 'Pre Engg',
    student_name: '',
    student_phone_number: '',
    father_name: '',
    father_phone_number: '',
    cnic: '',
    religion: 'islam',
    domicile: '',
    dob: '',
    email: '',
    father_occupation: '',
    father_cnic: '',
    guardian_name: '',
    guardian_occupation: '',
    guardian_phone_number: '',
    current_address: '',
    permanent_address: '',
    city: '',
    state: 'punjab',
    zip_code: '',
  });

  const handleuser = async (e) => {
    var users = {
      name: name,
      email: email,
      password: password,
      cpassword: cpassword,
      userid: uniqid(),
    };
    console.log(users);
    e.preventDefault();
    await axios
      .post('/api/post/registeruser', users)
      .then((res) => {
        alert(res.data);
        // localStorage.getItem("user",JSON.stringify(result));
        // localStorage.setItem('token-info', JSON.stringify(users));

        history('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    metric.percentage =
      (metric.obtain_marks / metric.total_marks) * 100;

    //
    intermediate.percentage =
      (intermediate.obtain_marks / intermediate.total_marks) *
      100;

    //
    graduate.percentage =
      (graduate.obtain_marks / graduate.total_marks) * 100;

    //
    console.log(metric);
    console.log(intermediate);
    console.log(graduate);
  };

  ///
  return (
    <div>
      <div className='mt-5  wraper  '>
        <div className='container '>
          <div className=' text-center '>
            <h1 className='rounded'>
              Government Graduate Science College Wahdat Road
              Lahore
            </h1>
            <h1 className='border rounded-pill h-25 w-75 d-inline-block'>
              Application For Addmission-2022
            </h1>

            <form className='rounded shadow p-5 mt-5 h-100 w-100 bg-white'>
              <div className='input-group mb-3 d-flex justify-content-end'>
                <h6 className='me-3 mt-2'>Shift</h6>
                <select
                  defaultValue='morning'
                  className='custom-select me-5'
                  id='inputGroupSelect01'
                  style={{ width: 220 }}
                >
                  <option value='morning'>Morning</option>

                  <option value='evening'>Evening</option>
                </select>
              </div>

              <div className='row '>
                <div className='col-md-4'>
                  <div className='form-check'>
                    <div className='input-group mb-3'>
                      <select
                        className='custom-select'
                        id='inputGroupSelect01'
                        defaultValue='intermediate'
                        style={{ width: 220 }}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            program: e.target.value,
                          })
                        }
                      >
                        <option value='intermediate'>
                          Intermediate
                        </option>
                        <option value='graduate'>
                          Graduate
                        </option>
                        <option value='postGraduate'>
                          Post Graduate
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='form-check'>
                    <div className='input-group mb-3'>
                      <div>
                        {form.program === 'graduate' ? (
                          <select
                            className='custom-select'
                            id='inputGroupSelect01'
                            style={{ width: 214 }}
                            onChange={(e) =>
                              console.log(e.target.value)
                            }
                          >
                            <option defaultValue value='bsit'>
                              BSIT
                            </option>
                            <option defaultValue>BSCS</option>
                            <option value='bba'>BBA</option>
                            <option value='botany'>
                              Botany
                            </option>
                            <option value='chemistry'>
                              Chemistry
                            </option>
                            <option value='communication-studies'>
                              Communication Studies
                            </option>
                            <option value='conomics'>
                              Economics
                            </option>
                            <option value='ducation'>
                              Education
                            </option>
                            <option value='english'>
                              English
                            </option>
                            <option value='political-science'>
                              Political Science
                            </option>
                            <option value='mathematics'>
                              Mathematics
                            </option>
                            <option value='sociology'>
                              Sociology
                            </option>
                            <option value='statistics'>
                              Statistics
                            </option>
                            <option value='urdu'>Urdu</option>
                            <option value='zoology'>
                              Zoology
                            </option>
                            <option value='physics'>
                              Physics
                            </option>
                          </select>
                        ) : form.program === 'intermediate' ? (
                          <select
                            className='custom-select'
                            id='inputGroupSelect01'
                            style={{ width: 214 }}
                            // onChange={(e) =>

                            // }
                          >
                            <option value='i.com'>I.Com</option>
                            <option value='i.c.s'>I.C.S</option>
                            <option value='general science'>
                              General Science
                            </option>
                          </select>
                        ) : (
                          <select
                            className='custom-select '
                            id='inputGroupSelect03'
                            style={{ width: 214 }}
                          >
                            <option
                              defaultValue
                              value='chemistry'
                            >
                              Chemistry
                            </option>
                            <option value='economics'>
                              Economics
                            </option>

                            <option value='english'>
                              English
                            </option>

                            <option value='mathematics'>
                              Mathematics
                            </option>
                            <option value='physics'>
                              Physics
                            </option>
                            <option value='b-com-it'>
                              B.Com(Information Technology)
                            </option>
                            <option value='urdu'>Urdu</option>
                            <option value='zoology'>
                              Zoology
                            </option>
                          </select>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row g-3'>
                <div className='col'>
                  <label
                    className='d-flex justify-content-start'
                    htmlFor='exampleInputName'
                  >
                    Student Name:
                  </label>
                  {/* <h6 className="ms-0">name</h6> */}
                  <input
                    type='text'
                    className='form-control'
                    id='exampleInputName'
                    placeholder='Enter Your Name'
                    aria-label='First name'
                    onChange={(e) =>
                      setForm({
                        ...form,
                        student_name: e.target.value,
                      })
                    }
                  />
                </div>
                <div className='col'>
                  <label
                    className='d-flex justify-content-start'
                    htmlFor='exampleInputPhone'
                  >
                    Student's Phone Number:
                  </label>
                  <input
                    type='number'
                    className='form-control'
                    id='exampleInputPhone'
                    placeholder='Enter Your Phone Number'
                    aria-label='Last name'
                    onChange={(e) =>
                      setForm({
                        ...form,
                        student_phone_number: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className='row g-3 mt-2'>
                <div className='col'>
                  <label
                    className='d-flex justify-content-start'
                    htmlFor='fatherName'
                  >
                    Student's Father Name:
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter Your Father Name'
                    id='fatherName'
                    aria-label='First name'
                    onChange={(e) =>
                      setForm({
                        ...form,
                        father_name: e.target.value,
                      })
                    }
                  />
                </div>
                <div className='col'>
                  <label
                    className='d-flex justify-content-start'
                    htmlFor='fatherPhone'
                  >
                    Student's Father Phone Number:
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='fatherPhone'
                    placeholder='Phone'
                    aria-label='Last name'
                    onChange={(e) =>
                      setForm({
                        ...form,
                        father_phone_number: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-4'>
                  <label
                    className='d-flex justify-content-start'
                    htmlFor='exampleInputCnic'
                  >
                    Student's Cnic Number:
                  </label>
                  <input
                    type='number'
                    className='form-control'
                    id='exampleInputCnic'
                    onChange={(e) =>
                      setForm({
                        ...form,
                        cnic: e.target.value,
                      })
                    }
                  />
                </div>
                <div className='col-md-4'>
                  <label
                    htmlFor='inputState'
                    className='form-label d-flex justify-content-start mb-0'
                  >
                    Religion
                  </label>
                  <select
                    onChange={(e) =>
                      setForm({
                        ...form,
                        religion: e.target.value,
                      })
                    }
                    id='inputState'
                    className='form-select '
                  >
                    <option defaultValue value='islam'>
                      Islam
                    </option>
                    <option value='christian'>Christian</option>
                    <option value='other'>Other</option>
                  </select>
                </div>
                <div className='col-md-4'>
                  <label
                    htmlFor='inputZip'
                    className='form-label d-flex justify-content-start mb-0'
                  >
                    Domicile
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='inputZip'
                    onChange={(e) =>
                      setForm({
                        ...form,
                        domicile: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              {/* address section */}
              <div className='row g-3'>
                <div className='col-md-6'>
                  <label
                    htmlFor='inputEmail4'
                    className='form-label d-flex justify-content-start'
                  >
                    Date Of Birth
                  </label>
                  <input
                    type='date'
                    className='form-control'
                    id='inputEmail4'
                    onChange={(e) =>
                      setForm({
                        ...form,
                        dob: e.target.value,
                      })
                    }
                  />
                </div>
                <div className='col-md-6'>
                  <label
                    htmlFor='inputPassword4'
                    className='form-label d-flex justify-content-start'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='inputPassword4'
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <label
                      htmlFor='inputOccupation4'
                      className='form-label d-flex justify-content-start'
                    >
                      Father Occupation
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='inputOccupation4'
                      placeholder='Enter Father Occupation'
                      aria-label='First name'
                      onChange={(e) =>
                        setForm({
                          ...form,
                          father_occupation: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className='col-md-6'>
                    <label
                      htmlFor='inputCnic'
                      className='form-label d-flex justify-content-start'
                    >
                      {' '}
                      Father's Cnic Number
                    </label>
                    <input
                      type='number'
                      className='form-control'
                      id='inputCnic'
                      placeholder="Enter Father's Cnic Number"
                      aria-label='First name'
                      onChange={(e) =>
                        setForm({
                          ...form,
                          father_cnic: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-4'>
                    <label
                      htmlFor='guardianName'
                      className='form-label d-flex justify-content-start'
                    >
                      Guardian's Name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='guardianName'
                      placeholder="Enter Gradian's Name"
                      aria-label='First name'
                      onChange={(e) =>
                        setForm({
                          ...form,
                          guardian_name: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className='col-md-4'>
                    <label
                      htmlFor='guardianOcupation'
                      className='form-label d-flex justify-content-start'
                    >
                      Guardian's Occupation
                    </label>
                    <input
                      type='number'
                      className='form-control'
                      placeholder="Enter gardian's Occupation"
                      aria-label=' First name'
                      id='guardianOcupation'
                      onChange={(e) =>
                        setForm({
                          ...form,
                          guardian_occupation: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className='col-md-4'>
                    <label
                      htmlFor='guardianPhone'
                      className='form-label d-flex justify-content-start'
                    >
                      Guardian's Phone Number
                    </label>
                    <input
                      type='number'
                      className='form-control'
                      placeholder="Enter Gradian's phone Number"
                      id='guardianPhone'
                      aria-label='First name'
                      onChange={(e) =>
                        setForm({
                          ...form,
                          guardian_phone_number: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className='col-12'>
                  <label
                    htmlFor='inputAddress'
                    className='form-label d-flex justify-content-start'
                  >
                    Current Address
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='inputAddress'
                    placeholder='1234 Main St'
                    onChange={(e) =>
                      setForm({
                        ...form,
                        current_address: e.target.value,
                      })
                    }
                  />
                </div>
                <div className='col-12'>
                  <label
                    htmlFor='inputAddress2'
                    className='d-flex justify-content-start form-label'
                  >
                    Permanent Address
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='inputAddress2'
                    placeholder='Apartment, studio, or floor'
                    onChange={(e) =>
                      setForm({
                        ...form,
                        permanent_address: e.target.value,
                      })
                    }
                  />
                </div>
                <div className='col-md-6'>
                  <label
                    htmlFor='inputCity'
                    className=' d-flex justify-content-start form-label'
                  >
                    City
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='inputCity'
                    onChange={(e) =>
                      setForm({
                        ...form,
                        city: e.target.value,
                      })
                    }
                  />
                </div>
                <div className='col-md-4'>
                  <label
                    htmlFor='inputState'
                    className=' d-flex justify-content-start form-label'
                  >
                    State
                  </label>
                  <select
                    id='inputState'
                    className='form-select'
                    defaultValue='punjab'
                    onChange={(e) =>
                      setForm({
                        ...form,
                        state: e.target.value,
                      })
                    }
                  >
                    <option value='punjab'>Punjab</option>
                    <option value='balochistan'>
                      Balochistan
                    </option>
                    <option value='sindh'>Sindh</option>
                    <option value='khyber pakhtunkhwa'>
                      Khyber Pakhtunkhwa
                    </option>
                    <option value='gilgit baltistan'>
                      Gilgit-Baltistan
                    </option>
                  </select>
                </div>
                <div className='col-md-2'>
                  <label
                    htmlFor='inputZip'
                    className='form-label d-flex justify-content-start '
                  >
                    Zip
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='inputZip'
                    onChange={(e) =>
                      setForm({
                        ...form,
                        zip_code: e.target.value,
                      })
                    }
                  />
                </div>
                <div className='container mt-5 ml-75'>
                  <table className='table border w-25'>
                    <thead>
                      <tr>
                        <th scope='col'>Examination</th>
                        <th scope='col'>Year</th>
                        <th scope='col'>Roll No</th>
                        <th scope='col'>Obtain Marks</th>
                        <th scope='col'>Total Marks</th>
                        <th scope='col'>%age</th>
                        <th scope='col'>Subject</th>
                        <th scope='col'>Board</th>
                        <th scope='col'>School/College</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'>Matric</th>
                        <td>
                          <input
                            type='number'
                            placeholder='year'
                            style={{ width: 80 }}
                            onChange={(e) =>
                              setMetric({
                                ...metric,
                                year: e.target.value,
                              })
                            }
                          ></input>
                        </td>
                        <td>
                          <input
                            type='number'
                            placeholder='roll'
                            style={{ width: 80 }}
                            onChange={(e) =>
                              setMetric({
                                ...metric,
                                roll_number: e.target.value,
                              })
                            }
                          ></input>
                        </td>
                        <td>
                          <input
                            type='number'
                            style={{ width: 80 }}
                            placeholder='obt'
                            onChange={(e) =>
                              setMetric({
                                ...metric,
                                obtain_marks: e.target.value,
                              })
                            }
                          ></input>
                        </td>
                        <td>
                          <input
                            type='number'
                            style={{ width: 80 }}
                            placeholder='tot'
                            onChange={(e) =>
                              setMetric({
                                ...metric,
                                total_marks: e.target.value,
                              })
                            }
                          ></input>
                        </td>
                        <td>
                          <div
                            type='number'
                            style={{ width: 156 }}
                            placeholder='%'
                          >
                            {metric.obtain_marks &&
                            metric.total_marks &&
                            metric.total_marks >=
                              metric.obtain_marks
                              ? (metric.obtain_marks /
                                  metric.total_marks) *
                                100
                              : 0}
                          </div>
                        </td>
                        <td>
                          <input
                            type='text'
                            style={{ width: 156 }}
                            placeholder='sub'
                          ></input>
                        </td>
                        <td>
                          <input
                            type='text'
                            style={{ width: 156 }}
                            placeholder='board'
                            onChange={(e) => {
                              setMetric({
                                ...metric,
                                board: e.target.value,
                              });
                              console.log(form);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type='text'
                            style={{ width: 156 }}
                            placeholder='instasd'
                            onChange={(e) => {
                              setMetric({
                                ...metric,
                                institute: e.target.value,
                              });
                              console.log(form);
                            }}
                          ></input>
                        </td>
                      </tr>

                      {/* inter mediate table */}

                      {form.program === 'graduate' ||
                      form.program === 'postGraduate' ? (
                        <tr>
                          <th scope='row'>Intermediate</th>
                          <td>
                            <input
                              type='number'
                              style={{ width: 80 }}
                              placeholder='year'
                              onChange={(e) =>
                                setIntermediate({
                                  ...intermediate,
                                  year: e.target.value,
                                })
                              }
                            ></input>
                          </td>
                          <td>
                            <input
                              type='number'
                              style={{ width: 80 }}
                              placeholder='roll number'
                              onChange={(e) =>
                                setIntermediate({
                                  ...intermediate,
                                  roll_number: e.target.value,
                                })
                              }
                            ></input>
                          </td>
                          <td>
                            <input
                              type='number'
                              style={{ width: 80 }}
                              placeholder='obt'
                              onChange={(e) =>
                                setIntermediate({
                                  ...intermediate,
                                  obtain_marks: e.target.value,
                                })
                              }
                            ></input>
                          </td>
                          <td>
                            <input
                              type='number'
                              style={{ width: 80 }}
                              placeholder='totl'
                              onChange={(e) =>
                                setIntermediate({
                                  ...intermediate,
                                  total_marks: e.target.value,
                                })
                              }
                            ></input>
                          </td>
                          <td>
                            <div
                              type='number'
                              style={{ width: 156 }}
                              placeholder='%'
                            >
                              {intermediate.obtain_marks &&
                              intermediate.total_marks &&
                              intermediate.total_marks >=
                                intermediate.obtain_marks
                                ? (intermediate.obtain_marks /
                                    intermediate.total_marks) *
                                  100
                                : 0}
                            </div>
                          </td>
                          <td>
                            <input
                              type='text '
                              style={{ width: 156 }}
                              placeholder='sub'
                              onChange={(e) =>
                                setIntermediate({
                                  ...intermediate,
                                  subject: e.target.value,
                                })
                              }
                            ></input>
                          </td>
                          <td>
                            <input
                              type='text'
                              style={{ width: 156 }}
                              placeholder='board'
                              onChange={(e) =>
                                setIntermediate({
                                  ...intermediate,
                                  board: e.target.value,
                                })
                              }
                            ></input>
                          </td>
                          <td>
                            <input
                              type='text'
                              style={{ width: 156 }}
                              placeholder='inst'
                              onChange={(e) =>
                                setIntermediate({
                                  ...intermediate,
                                  institute: e.target.value,
                                })
                              }
                            ></input>
                          </td>
                        </tr>
                      ) : (
                        <></>
                      )}

                      {/* graduate */}
                      {form.program === 'postGraduate' ? (
                        <tr>
                          <th scope='row'>BA/B.SC</th>
                          <td>
                            <input
                              type='number'
                              style={{ width: 80 }}
                              placeholder='year'
                              onChange={(e) =>
                                setGraduate({
                                  ...graduate,
                                  year: e.target.value,
                                })
                              }
                            ></input>
                          </td>
                          <td>
                            <input
                              type='number'
                              style={{ width: 80 }}
                              placeholder='roll'
                              onChange={(e) =>
                                setGraduate({
                                  ...graduate,
                                  roll_number: e.target.value,
                                })
                              }
                            ></input>
                          </td>
                          <td>
                            <input
                              type='number'
                              style={{ width: 80 }}
                              placeholder='obt'
                              onChange={(e) =>
                                setGraduate({
                                  ...graduate,
                                  obtain_marks: e.target.value,
                                })
                              }
                            ></input>
                          </td>
                          <td>
                            <input
                              type='number'
                              style={{ width: 80 }}
                              placeholder='tot'
                              onChange={(e) =>
                                setGraduate({
                                  ...graduate,
                                  total_marks: e.target.value,
                                })
                              }
                            ></input>
                          </td>
                          <td>
                            <div
                              type='number'
                              style={{ width: 156 }}
                              placeholder='%'
                            >
                              {graduate.obtain_marks &&
                              graduate.total_marks &&
                              graduate.total_marks >=
                                graduate.obtain_marks
                                ? (graduate.obtain_marks /
                                    graduate.total_marks) *
                                  100
                                : 0}
                            </div>
                          </td>
                          <td>
                            <input
                              type='text'
                              style={{ width: 156 }}
                              placeholder='sub'
                              onChange={(e) =>
                                setGraduate({
                                  ...graduate,
                                  subject: e.target.value,
                                })
                              }
                            ></input>
                          </td>
                          <td>
                            <input
                              type='text'
                              style={{ width: 156 }}
                              placeholder='board'
                              onChange={(e) =>
                                setGraduate({
                                  ...graduate,
                                  total_marks: e.target.value,
                                })
                              }
                            ></input>
                          </td>
                          <td>
                            <input
                              type='text'
                              style={{ width: 156 }}
                              placeholder='inst'
                              onChange={(e) => {
                                setGraduate({
                                  ...graduate,
                                  institute: e.target.value,
                                });
                              }}
                            ></input>
                          </td>
                        </tr>
                      ) : (
                        <></>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <button></button>
              <button
                type='submit'
                onClick={handleSubmit}
                className='mt-4 font-weight-bold text-uppercase text-bold shadow w-25 border-0 rounded-pill'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
