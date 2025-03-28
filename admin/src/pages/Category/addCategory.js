import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { emphasize, styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { useContext, useEffect, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from "@mui/material/Button";
import {
  deleteData,
  deleteImages,
  editData,
  fetchDataFromApi,
  postData,
  uploadImage,
} from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { FaRegImages } from "react-icons/fa";
import { MyContext } from "../../App";

import CircularProgress from "@mui/material/CircularProgress";
import { IoCloseSharp } from "react-icons/io5";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

//breadcrumb code
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const AddCategory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    images: [],
    color: "",
    slug: "",
    parentId: "",
  });

  const [previews, setPreviews] = useState([]);
  const [isImageRemove, setIsImageRemove] = useState(false);

  const formdata = new FormData();

  const history = useNavigate();

  const context = useContext(MyContext);

  useEffect(() => {
    fetchDataFromApi("/api/imageUpload").then((res) => {
      res?.map((item) => {
        item?.images?.map((img) => {
          deleteImages(`/api/category/deleteImage?img=${img}`).then((res) => {
            deleteData("/api/imageUpload/deleteAllImages");
          });
        });
      });
    });
  }, []);

  const changeInput = (e) => {
    setFormFields(() => ({
      ...formFields,
      [e.target.name]: e.target.value,
    }));
  };

  let img_arr = [];
  let uniqueArray = [];
  let selectedImages=[];

  const onChangeFile = async (e, apiEndPoint) => {
      try {
        const files = e.target.files;
  
        setUploading(true);
  
        //const fd = new FormData();
        for (var i = 0; i < files.length; i++) {
          // Validate file type
          if (
            files[i] &&
            (files[i].type === "image/jpeg" ||
              files[i].type === "image/jpg" ||
              files[i].type === "image/png" ||
              files[i].type === "image/webp")
          ) {
            const file = files[i];
            selectedImages.push(file);
            formdata.append(`images`, file);
          } else {
            context.setAlertBox({
              open: true,
              error: true,
              msg: "Please select a valid JPG or PNG image file.",
            });
  
            setUploading(false);
            return false;
          }
        }
  
        formFields.images = selectedImages;
      } catch (error) {
        console.log(error);
      }
  
      uploadImage(apiEndPoint, formdata).then((res) => {

        fetchDataFromApi("/api/imageUpload").then((response) => {
          if (
            response !== undefined &&
            response !== null &&
            response !== "" &&
            response.length !== 0
          ) {
            response.length !== 0 &&
              response.map((item) => {
                item?.images.length !== 0 &&
                  item?.images?.map((img) => {
                    img_arr.push({
                      id: item?._id,
                      img: img,
                    });
                    //console.log(img)
                  });
              });
  
            //setPreviews([]);
          

             uniqueArray = img_arr.filter((item, index, self) =>
              index === self.findIndex((t) => t.img === item.img)
            );
  
            const appendedArray = [...previews, ...img_arr];
  
            setPreviews(uniqueArray);

            setTimeout(() => {
              setUploading(false);
              //img_arr = [];
              context.setAlertBox({
                open: true,
                error: false,
                msg: "Images Uploaded!",
              });
            }, 200);
          }
        });
      });
    };


  const removeImg = async (indexToRemove, imgUrl, img_id) => {

      setIsImageRemove(true);
      const previews_arr = previews;

      const imgIndex = previews_arr.indexOf(imgUrl);

      deleteImages(`/api/category/deleteImage?img=${imgUrl}`).then((res) => {
          context.setAlertBox({
              open: true,
              error: false,
              msg: "Image Deleted!"
          })

          deleteData(`/api/imageUpload/deleteImage/image/${img_id}`).then((resp)=>{
              fetchDataFromApi("/api/imageUpload").then((response) => {
                  const img_array = [];
                  response?.map((item)=>{
                      img_array.push({
                          id:item?.id,
                          img:item?.images[0]
                      })
 
                  })
                 // previews_arr.splice(indexToRemove, 1); 
                  setPreviews([]);
                  setPreviews(img_array);
                  setIsImageRemove(false);
              })
          });
          
      })

  

  }

  const addCat = (e) => {
    e.preventDefault();

    const appendedArray = [...previews, ...uniqueArray];

    img_arr = [];
    // formdata.append('name', formFields.name);
    // formdata.append('color', formFields.color);

    // formdata.append('images', appendedArray);

    formFields.slug = formFields.name;
    formFields.images = appendedArray;

    if (
      formFields.name !== "" &&
      formFields.color !== "" &&
      previews.length !== 0
    ) {
      setIsLoading(true);

      postData(`/api/category/create`, formFields).then((res) => {
        // console.log(res);
        setIsLoading(false);
        context.fetchCategory();

        deleteData("/api/imageUpload/deleteAllImages");

        history("/category");
      });
    } else {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Please fill all the details",
      });
      return false;
    }
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4 mt-2">
          <h5 className="mb-0">Add Category</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Dashboard"
              icon={<HomeIcon fontSize="small" />}
            />

            <StyledBreadcrumb
              component="a"
              label="Category"
              href="#"
              deleteIcon={<ExpandMoreIcon />}
            />
            <StyledBreadcrumb
              label="Add Category"
              deleteIcon={<ExpandMoreIcon />}
            />
          </Breadcrumbs>
        </div>

        <form className="form" onSubmit={addCat}>
          <div className="row">
            <div className="col-sm-9">
              <div className="card p-4 mt-0">
                <div className="form-group">
                  <h6>Category Name</h6>
                  <input
                    type="text"
                    name="name"
                    value={formFields.name}
                    onChange={changeInput}
                  />
                </div>

                <div className="form-group">
                  <h6>Color</h6>
                  <input
                    type="text"
                    name="color"
                    value={formFields.color}
                    onChange={changeInput}
                  />
                </div>

                <div className="imagesUploadSec">
                  <h5 class="mb-4">Media And Published</h5>

                  <div className="imgUploadBox d-flex align-items-center">
                  {
                    previews?.length !== 0 && previews?.map((img, index) => {
                        return (
                            <div className='uploadBox' key={index}>
                         
                                <span className="remove" disabled={isImageRemove === true ? true : false} onClick={() => removeImg(index, img?.img, img?.id)}><IoCloseSharp /></span>
                                <div className='box'>
                                    <LazyLoadImage
                                        alt={"image"}
                                        effect="blur"
                                        className="w-100"
                                         src={img?.img?.replaceAll(' ','')} />
                                </div>
                            </div>
                        )
                    })
                }

                    <div className="uploadBox">
                      {uploading === true ? (
                        <div className="progressBar text-center d-flex align-items-center justify-content-center flex-column">
                          <CircularProgress />
                          <span>Uploading...</span>
                        </div>
                      ) : (
                        <>
                          <input
                            type="file"
                            onChange={(e) =>
                              onChangeFile(e, "/api/category/upload")
                            }
                            name="images"
                          />
                          <div className="info">
                            <FaRegImages />
                            <h5>image upload</h5>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <br />

                  <Button
                    type="submit"
                    className="btn-blue btn-lg btn-big w-100"
                  >
                    <FaCloudUploadAlt /> &nbsp;{" "}
                    {isLoading === true ? (
                      <CircularProgress color="inherit" className="loader" />
                    ) : (
                      "PUBLISH AND VIEW"
                    )}{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCategory;
