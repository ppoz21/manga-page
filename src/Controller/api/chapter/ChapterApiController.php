<?php


namespace App\Controller\api\chapter;


use App\Repository\ChapterRepository;
use App\Repository\ComicsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\SerializerInterface;

class ChapterApiController extends AbstractController
{

    private ChapterRepository $chapterRepository;
    private ComicsRepository $comicsRepository;
    private SerializerInterface $serializer;

    public function __construct(ChapterRepository $chapterRepository, ComicsRepository $comicsRepository, SerializerInterface $serializer)
    {
        $this->chapterRepository = $chapterRepository;
        $this->comicsRepository = $comicsRepository;
        $this->serializer = $serializer;
    }

    #[Route("/api/chapters/byComic/{id}")]
    public function getByComics(int $id): JsonResponse
    {
        $comic = $this->comicsRepository->find($id);
        $chapters = $this->chapterRepository->findBy(['comics' => $comic], ['addDate' => 'DESC']);

        $serialized = $this->serializer->serialize($chapters, JsonEncoder::FORMAT);

        return new JsonResponse($serialized, 200, [], true);
    }

}
