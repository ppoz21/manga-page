<?php


namespace App\Controller\api\comisc;


use App\Repository\ComicsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\SerializerInterface;

class LatestController extends AbstractController
{

    private ComicsRepository $comicsRepository;
    private SerializerInterface $serializer;

    public function __construct(ComicsRepository $comicsRepository, SerializerInterface $serializer)
    {
        $this->comicsRepository = $comicsRepository;
        $this->serializer = $serializer;
    }

    #[Route("/api/comics/latest")]
    public function getNewest()
    {
        $comics = $this->comicsRepository->findByPublishDate(10);

        $serialized = $this->serializer->serialize($comics, JsonEncoder::FORMAT);

        return new JsonResponse($serialized, 200, [], true);
    }

}
