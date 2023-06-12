const { getDirectusClient } =  require("../getDirectusClient")
const catchAsync  = require ( '../utils/catchAsync')
const  {StatusCodes,ReasonPhrases}  = require('http-status-codes') ;

const getNewsList = catchAsync(async(req,res)=>{
     const directus = await getDirectusClient()
   
    const {page = 1} = req.query
    const response = await directus.items('articles').readByQuery({
      page: page,
      meta: 'total_count',
      categories: { _eq: 'news' }
      });
    
    return res.status(StatusCodes.OK).json({
        ...response,
        message: ReasonPhrases.OK,
        status: StatusCodes.OK
      })
    
})

const getNewsById = catchAsync(async(req,res)=>{
    const directus = await getDirectusClient()
    const {id = 1} = req.query;
      
    const item = await directus.items('articles').readOne(id);
        
    return res.status(StatusCodes.OK).json({
        data:item,
        message: ReasonPhrases.OK,
        status: StatusCodes.OK
      })
})
const getPostsList = catchAsync(async(req,res)=>{
    const directus = await getDirectusClient()
  
  const items = await directus.items('articles').readByQuery({
    categories: { _eq: 'news' },
    id: { _eq: id }
    });
        
   return res.status(StatusCodes.OK).json({
        ...items,
        message: ReasonPhrases.OK,
        status: StatusCodes.OK
      })
})
const getPostById = catchAsync(async(req,res)=>{
    const directus = await getDirectusClient()
   const {id} = req.query
   const item = await directus.items('articles').readByQuery({
    categories: { _eq: 'blog' },
    id: { _eq: id }
    });
        
    return res.status(StatusCodes.OK).json({
        ...item,
        message: ReasonPhrases.OK,
        status: StatusCodes.OK
      })
})

const getArticlesBySearch = catchAsync(async(req,res)=>{
    const directus = await getDirectusClient()
   const {keyword} = req.query
   const items = await directus.items('articles').readByQuery({
      search: keyword,
      })
        
    return res.status(StatusCodes.OK).json({
        ...items,
        message: ReasonPhrases.OK,
        status: StatusCodes.OK
      })
})

const getArticlesByTag = catchAsync(async(req,res)=>{
    const directus = await getDirectusClient()
   const {tag} = req.query
   const items = await directus.items('articles').readByQuery({
    tags: { _contains: tag }
  });
        
    return res.status(StatusCodes.OK).json({
        ...items,
        message: ReasonPhrases.OK,
        status: StatusCodes.OK
      })
})

module.exports  = {
    getNewsList,
    getNewsById,
    getPostsList,
    getPostById,
    getArticlesBySearch,
    getArticlesByTag

}
